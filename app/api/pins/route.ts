import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId, xPath, xPercent, yPercent, comment } = await req.json()
  if (!projectId || !comment) {
    return NextResponse.json({ error: 'projectId and comment are required' }, { status: 400 })
  }

  // Verify project belongs to user
  const project = await prisma.project.findFirst({
    where: { id: projectId, userId: session.user.id },
  })
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  const pin = await prisma.pin.create({
    data: {
      projectId,
      xPath: xPath || '',
      xPercent: xPercent || 0,
      yPercent: yPercent || 0,
      comment,
    },
  })

  return NextResponse.json({ pin }, { status: 201 })
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const projectId = searchParams.get('projectId')
  if (!projectId) {
    return NextResponse.json({ error: 'projectId is required' }, { status: 400 })
  }

  const pins = await prisma.pin.findMany({
    where: {
      projectId,
      project: { userId: session.user.id },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ pins })
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { pinId, status } = await req.json()
  if (!pinId || !status) {
    return NextResponse.json({ error: 'pinId and status required' }, { status: 400 })
  }

  const pin = await prisma.pin.findFirst({
    where: { id: pinId, project: { userId: session.user.id } },
  })
  if (!pin) {
    return NextResponse.json({ error: 'Pin not found' }, { status: 404 })
  }

  const updated = await prisma.pin.update({
    where: { id: pinId },
    data: { status },
  })

  return NextResponse.json({ pin: updated })
}
