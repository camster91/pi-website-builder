import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { z, ZodError } from 'zod'

const signupSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = signupSchema.parse(body)

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    // Trigger the same new-user events
    await prisma.user.update({
      where: { id: user.id },
      data: { credits: 100 },
    })
    await prisma.tokenTransaction.create({
      data: {
        userId: user.id,
        amount: 100,
        type: 'BONUS',
        metadata: { reason: 'New user welcome credits' },
      },
    })

    return NextResponse.json({ message: 'User created' }, { status: 201 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }
    console.error('Sign-up error:', error)
    return NextResponse.json({ error: 'Sign-up failed' }, { status: 500 })
  }
}
