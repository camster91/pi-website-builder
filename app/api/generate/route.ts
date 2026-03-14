import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { gemini } from '@/lib/gemini'
import { ratelimit } from '@/lib/ratelimit'
import { projectReadyEmail } from '@/lib/email'
import { getImagesForIndustry } from '@/lib/image-bank'
import { getFontPairForIndustry, type FontPair } from '@/lib/font-pairs'
import { ICONS, SECTION_ICONS } from '@/lib/svg-icons'
import { z } from 'zod'

const CREDIT_COST = 50

const generateSchema = z.object({
  prompt: z.string().min(1).max(2000),
})

async function withRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  try {
    return await fn()
  } catch (err) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return withRetry(fn, retries - 1)
    }
    throw err
  }
}

/**
 * Section-by-section generation pipeline:
 * 1. Plan → comprehensive JSON structure
 * 2. Enrich plan with curated images, fonts, icons
 * 3. Generate each section individually (16K tokens each)
 * 4. Assemble into complete HTML document
 * 5. QA pass for polish
 */
export async function POST(req: NextRequest) {
  const encoder = new TextEncoder()
  const stream = new TransformStream()
  const writer = stream.writable.getWriter()

  const send = (data: any) => writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))

  const startTime = Date.now()

  ;(async () => {
    try {
      // ── Auth ──
      const session = await getServerSession(authOptions)
      if (!session?.user?.id) {
        send({ error: 'Unauthorized' })
        return writer.close()
      }

      const { success } = await ratelimit.limit(session.user.id)
      if (!success) {
        send({ error: 'Too many requests' })
        return writer.close()
      }

      const body = await req.json()
      const { prompt } = generateSchema.parse(body)

      const project = await prisma.project.create({
        data: {
          name: prompt.substring(0, 60).trim(),
          description: prompt,
          prompt,
          userId: session.user.id,
          status: 'GENERATING',
        },
      })

      // ── Step 1: Plan ──
      send({ status: 'Planning website structure...', projectId: project.id })
      const plan = await withRetry(() => gemini.generatePlan(prompt))

      const industry = plan.industry || 'local-service'
      const styleName = plan.style || 'modern'

      // ── Step 2: Enrich plan with curated assets ──
      send({ status: 'Selecting visuals and typography...', detail: `${industry} • ${styleName}` })

      // Get curated images
      const images = getImagesForIndustry(industry)
      plan._images = images

      // Get curated font pair
      const fontPair = getFontPairForIndustry(industry, styleName)
      plan._fontPair = fontPair

      // Override plan fonts with curated pair (better quality than AI-guessed)
      if (!plan.design) plan.design = {}
      plan.design.fontHeading = fontPair.heading
      plan.design.fontBody = fontPair.body

      // Inject image URLs into plan content so section generator uses REAL URLs
      if (!plan.content) plan.content = {}
      plan.content._heroImage = images.hero[0]
      plan.content._serviceImages = images.services
      plan.content._aboutImage = images.about[0]
      plan.content._backgroundImage = images.background[0]

      // Build style object for section generation
      const style = {
        name: styleName,
        description: fontPair.vibe,
        tokens: {
          colors: {
            primary: plan.design.primaryColor || '#2563EB',
            primaryDark: plan.design.primaryDark || '#1D4ED8',
            accent: plan.design.accentColor || '#F59E0B',
            secondary: plan.design.secondaryColor || '#0F172A',
            text: plan.design.textPrimary || '#0F172A',
            textSecondary: plan.design.textSecondary || '#475569',
            textMuted: plan.design.textMuted || '#94A3B8',
            bg: plan.design.bgPrimary || '#FAFAF9',
            bgCard: plan.design.bgCard || '#FFFFFF',
            bgSection: plan.design.bgSection || '#F5F3ED',
            border: plan.design.borderColor || '#E2E8F0',
          },
          typography: {
            fontHeading: fontPair.heading,
            fontBody: fontPair.body,
            headingWeight: '700',
            letterSpacing: '-0.025em',
          },
          shape: {
            borderRadius: plan.design.borderRadius || '16px',
            heroStyle: plan.design.heroStyle || 'gradient-mesh',
            motifs: ['accent-word', 'floating-cards', 'trust-badges'],
          },
          effects: {
            glassmorphism: true,
            shadow: 'large',
          },
        },
      }

      // ── Step 3: Section-by-section generation ──
      const sectionOrder = (plan.sections || [
        { type: 'hero' },
        { type: 'social-proof' },
        { type: 'features' },
        { type: 'about' },
        { type: 'testimonials' },
        { type: 'cta' },
        { type: 'contact' },
        { type: 'footer' },
      ]).map((s: any) => s.type || s.id)

      const generatedSections: Array<{ type: string; html: string }> = []
      let previousHtml = ''

      for (let i = 0; i < sectionOrder.length; i++) {
        const sectionType = sectionOrder[i]
        const progress = Math.round(((i + 1) / sectionOrder.length) * 100)
        
        send({
          status: `Building ${sectionType} section...`,
          detail: `Section ${i + 1}/${sectionOrder.length} (${progress}%)`,
          progress,
        })

        try {
          const sectionHtml = await withRetry(() =>
            gemini.generateSection(plan, style, sectionType, previousHtml)
          )

          generatedSections.push({ type: sectionType, html: sectionHtml })
          // Accumulate HTML for context continuity
          previousHtml += '\n' + sectionHtml
        } catch (sectionError) {
          console.error(`Failed to generate section ${sectionType}:`, sectionError)
          // Continue with remaining sections
        }
      }

      if (generatedSections.length === 0) {
        send({ error: 'Generation failed — no sections generated' })
        return writer.close()
      }

      // ── Step 4: Assemble complete document ──
      send({ status: 'Assembling complete website...', detail: `${generatedSections.length} sections` })
      const assembledHtml = gemini.assembleWebsite(generatedSections, plan, style)

      // ── Step 5: QA pass ──
      send({ status: 'Final quality review...', detail: `${Math.round(assembledHtml.length / 1024)}KB — polishing` })
      const { html: finalHtml } = await withRetry(() =>
        gemini.reviewAndImprove(assembledHtml, plan)
      )

      // ── Save ──
      await prisma.file.createMany({
        data: [{
          name: 'index.html',
          path: 'index.html',
          content: finalHtml || assembledHtml,
          mimeType: 'text/html',
          projectId: project.id,
        }],
      })

      await prisma.project.update({
        where: { id: project.id },
        data: {
          status: 'DRAFT',
          creditsUsed: CREDIT_COST,
          generationTime: Math.round((Date.now() - startTime) / 1000),
          name: plan.title ? `${plan.title}` : project.name,
        },
      })

      await prisma.user.update({
        where: { id: session.user.id },
        data: { credits: { decrement: CREDIT_COST } },
      })

      // Email notification
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { email: true },
      })
      if (user?.email) {
        projectReadyEmail(user.email, project.name, project.id).catch(console.error)
      }

      send({ success: true, projectId: project.id })
    } catch (error) {
      console.error('Generation error:', error)
      send({ error: 'Generation failed' })
    } finally {
      writer.close()
    }
  })()

  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
