import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

const ORCHESTRATOR_URL =
  process.env.DOCKER_ORCHESTRATOR_URL || 'http://localhost:3001'

function generateSubdomain(projectName: string): string {
  return (
    projectName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 30) +
    '-' +
    Math.random().toString(36).substring(2, 6)
  )
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const project = await prisma.project.findFirst({
    where: { id, userId: session.user.id },
    include: { files: true },
  })

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  if (project.files.length === 0) {
    return NextResponse.json({ error: 'No files to deploy' }, { status: 400 })
  }

  try {
    const subdomain = project.subdomain || generateSubdomain(project.name)

    // Call docker orchestrator
    const response = await fetch(`${ORCHESTRATOR_URL}/api/containers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        projectId: project.id,
        subdomain,
        files: project.files.map((f) => ({ path: f.path, content: f.content })),
      }),
      signal: AbortSignal.timeout(30000),
    })

    if (!response.ok) {
      const err = await response.json().catch(() => ({ error: 'Orchestrator error' }))
      throw new Error(err.error || 'Deploy failed')
    }

    const result = await response.json()

    // Update project with deployment info
    await prisma.project.update({
      where: { id: project.id },
      data: {
        status: 'LIVE',
        subdomain,
        containerId: result.containerId,
        liveUrl: result.liveUrl,
      },
    })

    return NextResponse.json({
      success: true,
      liveUrl: result.liveUrl,
      subdomain,
    })
  } catch (error: any) {
    console.error('Deploy error:', error)
    return NextResponse.json(
      { error: error.message || 'Deployment failed' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const project = await prisma.project.findFirst({
    where: { id, userId: session.user.id },
  })

  if (!project?.containerId) {
    return NextResponse.json({ error: 'No deployment found' }, { status: 404 })
  }

  try {
    await fetch(`${ORCHESTRATOR_URL}/api/containers/${project.containerId}`, {
      method: 'DELETE',
      signal: AbortSignal.timeout(10000),
    })

    await prisma.project.update({
      where: { id: project.id },
      data: { status: 'DRAFT', containerId: null, liveUrl: null, subdomain: null },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
