import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { gemini } from '@/lib/gemini'
import { getSuggestedStyles } from '@/lib/design-styles'
import { z } from 'zod'

const requestSchema = z.object({
  prompt: z.string().min(3, 'Prompt must be at least 3 characters').max(2000, 'Prompt must be less than 2000 characters'),
})

export async function POST(req: NextRequest) {
  try {
    // 1. Validate session
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Parse and validate body
    const body = await req.json()
    const validation = requestSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      )
    }

    const { prompt } = validation.data

    // 3. Generate plan using Gemini
    const plan = await gemini.generatePlan(prompt)

    // 4. Get suggested styles
    const suggestedStyles = getSuggestedStyles(prompt)
    const suggestions = suggestedStyles.map(style => style.id)

    // 5. Return plan and suggestions
    return NextResponse.json({
      plan,
      suggestions,
    })
  } catch (error) {
    console.error('Error generating plan:', error)

    // Handle Zod errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }

    // Generic error
    return NextResponse.json(
      { error: 'Failed to generate plan' },
      { status: 500 }
    )
  }
}
