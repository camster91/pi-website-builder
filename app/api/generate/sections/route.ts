import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { gemini } from '@/lib/gemini'
import { getStyleById } from '@/lib/design-styles'
import { z } from 'zod'

const requestSchema = z.object({
  prompt: z.string().min(3).max(2000),
  styleId: z.string(),
  plan: z.any(), // JSON plan object
})

const SECTION_TYPES = [
  { type: 'hero', title: 'Hero' },
  { type: 'social-proof', title: 'Social Proof' },
  { type: 'features', title: 'Features' },
  { type: 'about', title: 'About' },
  { type: 'testimonials', title: 'Testimonials' },
  { type: 'cta', title: 'CTA Banner' },
  { type: 'contact', title: 'Contact' },
  { type: 'footer', title: 'Footer' },
]

export async function POST(req: NextRequest) {
  const encoder = new TextEncoder()
  const stream = new TransformStream()
  const writer = stream.writable.getWriter()

  const send = async (data: any) => {
    await writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
  }

  // Start async processing
  ;(async () => {
    try {
      // 1. Validate session
      const session = await getServerSession(authOptions)
      if (!session?.user?.id) {
        await send({ type: 'error', message: 'Unauthorized' })
        await writer.close()
        return
      }

      // 2. Parse and validate body
      const body = await req.json()
      const validation = requestSchema.safeParse(body)

      if (!validation.success) {
        await send({ type: 'error', message: validation.error.errors[0].message })
        await writer.close()
        return
      }

      const { prompt, styleId, plan } = validation.data

      // 3. Check credits
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { credits: true },
      })

      if (!user || user.credits < 50) {
        await send({ type: 'error', message: 'Insufficient credits' })
        await writer.close()
        return
      }

      // 4. Create project
      const project = await prisma.project.create({
        data: {
          name: plan.title || 'Untitled Project',
          description: plan.tagline || '',
          prompt,
          styleId,
          plan,
          status: 'GENERATING',
          userId: session.user.id,
          creditsUsed: 50,
        },
      })

      // 5. Deduct credits
      await prisma.user.update({
        where: { id: session.user.id },
        data: { credits: { decrement: 50 } },
      })

      await prisma.tokenTransaction.create({
        data: {
          userId: session.user.id,
          amount: -50,
          type: 'WEBSITE_GENERATION',
          metadata: { projectId: project.id },
        },
      })

      // 6. Get style tokens
      const style = getStyleById(styleId)
      if (!style) {
        await send({ type: 'error', message: 'Invalid style ID' })
        await writer.close()
        return
      }

      const styleTokens = style.tokens

      // 7. Determine sections to generate
      const sectionsToGenerate = SECTION_TYPES.filter(section => {
        // Only include pricing if plan has pricing
        if (section.type === 'pricing' && !plan.hasPricing) {
          return false
        }
        return true
      })

      // 8. Generate each section
      let previousHtml = ''
      const completedSections: Array<{ type: string; html: string; order: number }> = []

      for (let i = 0; i < sectionsToGenerate.length; i++) {
        const section = sectionsToGenerate[i]

        try {
          // Send section_start event
          await send({ type: 'section_start', section: section.type })

          // Generate section HTML
          const html = await gemini.generateSection(
            plan,
            styleTokens,
            section.type,
            previousHtml
          )

          // Save section to database
          const existingSection = await prisma.section.findFirst({
            where: {
              projectId: project.id,
              type: section.type,
            },
          })

          if (existingSection) {
            await prisma.section.update({
              where: { id: existingSection.id },
              data: {
                html,
                order: i,
                status: 'COMPLETE',
              },
            })
          } else {
            await prisma.section.create({
              data: {
                projectId: project.id,
                type: section.type,
                title: section.title,
                html,
                order: i,
                status: 'COMPLETE',
              },
            })
          }

          // Track completed sections
          completedSections.push({
            type: section.type,
            html,
            order: i,
          })

          // Update previous HTML for context
          previousHtml += '\n' + html

          // Send section_done event
          await send({ type: 'section_done', section: section.type })
        } catch (error) {
          console.error(`Error generating section ${section.type}:`, error)

          // Mark section as failed
          const existingSection = await prisma.section.findFirst({
            where: {
              projectId: project.id,
              type: section.type,
            },
          })

          if (existingSection) {
            await prisma.section.update({
              where: { id: existingSection.id },
              data: { status: 'FAILED' },
            })
          } else {
            await prisma.section.create({
              data: {
                projectId: project.id,
                type: section.type,
                title: section.title,
                html: '',
                order: i,
                status: 'FAILED',
              },
            })
          }

          // Send section_error event
          await send({ type: 'section_error', section: section.type })

          // Continue with next section
          continue
        }
      }

      // 9. Assemble full HTML document
      if (completedSections.length > 0) {
        try {
          const fullHtml = await gemini.assembleWebsite(completedSections, plan, style)

          // 10. Save File record (File model has unique constraint on projectId + path)
          await prisma.file.upsert({
            where: {
              projectId_path: {
                projectId: project.id,
                path: 'index.html',
              },
            },
            create: {
              projectId: project.id,
              name: 'index.html',
              path: 'index.html',
              content: fullHtml,
              mimeType: 'text/html',
              size: fullHtml.length,
            },
            update: {
              content: fullHtml,
              size: fullHtml.length,
            },
          })
        } catch (error) {
          console.error('Error assembling website:', error)
          await send({ type: 'error', message: 'Failed to assemble website' })
        }
      }

      // 11. Update project status to DRAFT
      await prisma.project.update({
        where: { id: project.id },
        data: { status: 'DRAFT' },
      })

      // 12. Send complete event
      await send({ type: 'complete', projectId: project.id })

      // Close stream
      await writer.close()
    } catch (error) {
      console.error('Error in SSE stream:', error)
      try {
        await send({ type: 'error', message: 'Internal server error' })
        await writer.close()
      } catch {
        // Stream already closed
      }
    }
  })()

  // Return SSE response
  return new Response(stream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}
