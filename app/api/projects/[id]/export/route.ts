import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import JSZip from 'jszip'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params

  const files = await prisma.file.findMany({ where: { projectId } })
  if (files.length === 0) {
    return new Response(JSON.stringify({ error: 'No files found' }), { status: 404 })
  }

  const zip = new JSZip()
  for (const file of files) zip.file(file.path, file.content)

  const blob = await zip.generateAsync({ type: 'blob' })
  const buffer = await blob.arrayBuffer()

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="project-${projectId}.zip"`,
    },
  })
}
