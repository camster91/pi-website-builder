import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

import { z } from 'zod'

const pinSchema = z.object({
  projectId: z.string(),
  xPercent: z.number().min(0).max(100),
  yPercent: z.number().min(0).max(100),
  comment: z.string().min(1).max(500),
})

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { projectId, xPercent, yPercent, comment } = pinSchema.parse(body)

  const pin = await prisma.pin.create({
    data: {
      projectId,
      xPath: 'root', 
      xPercent,
      yPercent,
      comment,
    },
  })
  return NextResponse.json(pin)
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const pins = await prisma.pin.findMany({
    where: { projectId: params.id },
  })
  return NextResponse.json(pins)
}
