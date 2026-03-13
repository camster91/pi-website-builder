import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { gemini } from '@/lib/gemini'

const CREDIT_COST = 50 // credits per generation

export async function POST(req: NextRequest) {
  const startTime = Date.now()

  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    if (user.credits < CREDIT_COST) {
      return NextResponse.json(
        { error: `Insufficient credits. Need ${CREDIT_COST}, have ${user.credits}.` },
        { status: 402 }
      )
    }

    const body = await req.json()
    const { prompt } = body
    if (!prompt?.trim()) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    // Create project record
    const project = await prisma.project.create({
      data: {
        name: prompt.substring(0, 60).trim() + (prompt.length > 60 ? '...' : ''),
        description: prompt,
        prompt,
        userId: user.id,
        status: 'GENERATING',
      },
    })

    try {
      let totalTokens = 0

      // Step 1: Planner
      const plan = await gemini.generatePlan(prompt)

      // Step 2: Coder
      const { html: rawHtml, usage: coderUsage } = await gemini.generateCode(plan, prompt)
      totalTokens += coderUsage?.totalTokens || 0

      // Step 3: QA review
      const { html: finalHtml, usage: qaUsage } = await gemini.reviewAndImprove(rawHtml, plan)
      totalTokens += qaUsage?.totalTokens || 0

      const generationTime = Math.round((Date.now() - startTime) / 1000)

      // Save files
      const htmlContent = finalHtml || rawHtml
      const htmlSize = Buffer.byteLength(htmlContent, 'utf8')

      await prisma.file.createMany({
        data: [
          {
            name: 'index.html',
            path: 'index.html',
            content: htmlContent,
            mimeType: 'text/html',
            size: htmlSize,
            projectId: project.id,
          },
        ],
      })

      // Update project
      await prisma.project.update({
        where: { id: project.id },
        data: {
          status: 'DRAFT',
          creditsUsed: CREDIT_COST,
          tokensUsed: totalTokens,
          modelUsed: 'gemini-2.0-flash',
          generationTime,
        },
      })

      // Deduct credits
      await prisma.user.update({
        where: { id: user.id },
        data: { credits: { decrement: CREDIT_COST } },
      })

      // Log transaction
      await prisma.tokenTransaction.create({
        data: {
          userId: user.id,
          amount: -CREDIT_COST,
          type: 'WEBSITE_GENERATION',
          metadata: { prompt: prompt.substring(0, 200), projectId: project.id },
        },
      })

      return NextResponse.json({
        success: true,
        projectId: project.id,
        message: 'Website generated successfully',
      })
    } catch (genError) {
      await prisma.project.update({
        where: { id: project.id },
        data: { status: 'FAILED' },
      })
      console.error('Generation error:', genError)
      return NextResponse.json({ error: 'Generation failed. Please try again.' }, { status: 500 })
    }
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
