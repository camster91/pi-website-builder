import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { gemini } from '@/lib/gemini'
import { ratelimit } from '@/lib/ratelimit'
import { projectReadyEmail } from '@/lib/email'
import { z } from 'zod'

const CREDIT_COST = 50 

const generateSchema = z.object({
  prompt: z.string().min(1).max(2000),
})

async function withRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return withRetry(fn, retries - 1);
    }
    throw err;
  }
}

export async function POST(req: NextRequest) {
  const encoder = new TextEncoder()
  const stream = new TransformStream()
  const writer = stream.writable.getWriter()

  const send = (data: any) => writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))

  const startTime = Date.now()

  // Execute in background to stream updates
  ;(async () => {
    try {
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

      send({ status: 'Planning website structure...', projectId: project.id })
      const plan = await withRetry(() => gemini.generatePlan(prompt))

      send({ status: 'Writing website code...' })
      const { html: rawHtml, usage: coderUsage } = await withRetry(() => gemini.generateCode(plan, prompt))
      
      send({ status: 'Reviewing and improving design...' })
      const { html: finalHtml, usage: qaUsage } = await withRetry(() => gemini.reviewAndImprove(rawHtml, plan))

      await prisma.file.createMany({
        data: [{ name: 'index.html', path: 'index.html', content: finalHtml || rawHtml, mimeType: 'text/html', projectId: project.id }]
      })

      await prisma.project.update({
        where: { id: project.id },
        data: { status: 'DRAFT', creditsUsed: CREDIT_COST, generationTime: Math.round((Date.now() - startTime) / 1000) }
      })

      await prisma.user.update({
        where: { id: session.user.id },
        data: { credits: { decrement: CREDIT_COST } }
      })

      // Send email notification
      const user = await prisma.user.findUnique({ where: { id: session.user.id }, select: { email: true } })
      if (user?.email) {
        projectReadyEmail(user.email, project.name, project.id).catch(console.error)
      }

      send({ success: true, projectId: project.id })
    } catch (error) {
      send({ error: 'Generation failed' })
    } finally {
      writer.close()
    }
  })()

  return new Response(stream.readable, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' }
  })
}
