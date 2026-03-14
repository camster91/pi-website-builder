import { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { gemini, type AgentType } from '@/lib/gemini'
import { ratelimit } from '@/lib/ratelimit'
import { projectReadyEmail } from '@/lib/email'
import { getImagesForIndustry } from '@/lib/image-bank'
import { getFontPairForIndustry } from '@/lib/font-pairs'
import { hasComponents, selectBestVariant, buildSectionOrder } from '@/lib/components/registry'
import { fillTemplate, type DesignTokens } from '@/lib/components/types'
import { buildContentFillPrompt, parseContentFill } from '@/lib/components/content-fill'
import { buildImagePrompts, generateImages, getImageUrl } from '@/lib/ai-images'
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
      await new Promise((r) => setTimeout(r, 1500))
      return withRetry(fn, retries - 1)
    }
    throw err
  }
}

/**
 * Hybrid generation pipeline:
 * 1. Plan → comprehensive JSON structure
 * 2. Start AI image generation in background (parallel)
 * 3. Enrich plan with curated fonts, icons, images
 * 4. For each section:
 *    - If component template exists → fill content slots (fast, guaranteed quality)
 *    - If no template → full AI section generation (current approach)
 * 5. Assemble into complete HTML document
 * 6. QA pass for polish
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

      // ── Step 2: Start AI image generation in background ──
      send({ status: 'Generating custom visuals...', detail: 'AI images + typography' })

      // Build style object early
      const fontPair = getFontPairForIndustry(industry, styleName)
      if (!plan.design) plan.design = {}
      plan.design.fontHeading = fontPair.heading
      plan.design.fontBody = fontPair.body

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
          effects: { glassmorphism: true, shadow: 'large' },
        },
      }

      // Fire AI image generation in parallel (don't await yet)
      const imagePrompts = buildImagePrompts(plan, style)
      const imagePromise = generateImages(imagePrompts, industry, 25000)
        .catch((err) => {
          console.error('AI image generation failed:', err)
          return null
        })

      // Get curated Unsplash images as fallback
      const fallbackImages = getImagesForIndustry(industry)

      // ── Step 3: Wait for images, prepare tokens ──
      const aiImages = await imagePromise

      // Build design tokens for component system
      const tokens: DesignTokens = {
        primary: style.tokens.colors.primary,
        primaryDark: style.tokens.colors.primaryDark,
        accent: style.tokens.colors.accent,
        bg: style.tokens.colors.bg,
        bgCard: style.tokens.colors.bgCard,
        bgSection: style.tokens.colors.bgSection,
        text: style.tokens.colors.text,
        textSec: style.tokens.colors.textSecondary,
        textMuted: style.tokens.colors.textMuted,
        border: style.tokens.colors.border,
        fontHeading: fontPair.heading,
        fontBody: fontPair.body,
        radius: style.tokens.shape.borderRadius,
        // Use AI image if available, otherwise Unsplash
        heroImage: aiImages?.get('hero')
          ? getImageUrl(aiImages.get('hero')!)
          : fallbackImages.hero[0],
        aboutImage: aiImages?.get('about')
          ? getImageUrl(aiImages.get('about')!)
          : fallbackImages.about[0],
        serviceImages: fallbackImages.services,
      }

      // Inject images into plan for AI section generation
      if (!plan.content) plan.content = {}
      plan.content._heroImage = tokens.heroImage
      plan.content._aboutImage = tokens.aboutImage
      plan.content._serviceImages = tokens.serviceImages
      plan._images = fallbackImages
      plan._fontPair = fontPair

      // ── Step 4: Section-by-section generation (hybrid) ──
      // Smart section order: use plan's sections OR build from industry
      const sectionOrder = plan.sections && plan.sections.length > 0
        ? plan.sections.map((s: any) => s.type || s.id)
        : buildSectionOrder(industry)

      const generatedSections: Array<{ type: string; html: string; css?: string }> = []
      let previousHtml = ''

      for (let i = 0; i < sectionOrder.length; i++) {
        const sectionType = sectionOrder[i]
        const progress = Math.round(((i + 1) / sectionOrder.length) * 100)

        // Check if we have a pre-built component for this section
        if (hasComponents(sectionType)) {
          // ── Component path: fast, guaranteed quality ──
          send({
            status: `Building ${sectionType} section...`,
            detail: `Component template (${i + 1}/${sectionOrder.length})`,
            progress,
          })

          try {
            const variant = selectBestVariant(
              sectionType,
              industry,
              plan.design?.tags || [],
              plan.design?.heroStyle,
              project.id  // seed for variety
            )

            if (variant) {
              // Ask AI to fill content slots (small, fast prompt)
              const fillPrompt = buildContentFillPrompt(variant, plan, sectionType)
              const fillResult = await withRetry(() =>
                gemini.generate('planner' as AgentType, fillPrompt, 2048)
              )
              const filledContent = parseContentFill(fillResult.text)

              // Fill the template
              const { html, css } = fillTemplate(variant, filledContent, tokens)

              generatedSections.push({ type: sectionType, html: `<style>${css}</style>\n${html}`, css })
              previousHtml += '\n' + html
              continue
            }
          } catch (compError) {
            console.error(`Component fill failed for ${sectionType}, falling back to AI:`, compError)
          }
        }

        // ── AI generation path: full section generation ──
        send({
          status: `Building ${sectionType} section...`,
          detail: `AI generation (${i + 1}/${sectionOrder.length})`,
          progress,
        })

        try {
          const sectionHtml = await withRetry(() =>
            gemini.generateSection(plan, style, sectionType, previousHtml)
          )
          generatedSections.push({ type: sectionType, html: sectionHtml })
          previousHtml += '\n' + sectionHtml
        } catch (sectionError) {
          console.error(`Failed to generate ${sectionType}:`, sectionError)
        }
      }

      if (generatedSections.length === 0) {
        send({ error: 'Generation failed — no sections generated' })
        return writer.close()
      }

      // ── Step 5: Assemble ──
      send({ status: 'Assembling complete website...', detail: `${generatedSections.length} sections` })
      const assembledHtml = gemini.assembleWebsite(generatedSections, plan, style)

      // ── Step 6: QA pass ──
      send({ status: 'Final quality review...', detail: `${Math.round(assembledHtml.length / 1024)}KB` })
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
          name: plan.title || project.name,
        },
      })

      await prisma.user.update({
        where: { id: session.user.id },
        data: { credits: { decrement: CREDIT_COST } },
      })

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
