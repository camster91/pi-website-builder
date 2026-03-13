import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import JSZip from 'jszip'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const projectId = params.id
  
  const files = await prisma.file.findMany({
    where: { projectId },
  })

  if (files.length === 0) {
    return NextResponse.json({ error: 'No files found' }, { status: 404 })
  }

  const zip = new JSZip()
  for (const file of files) {
    zip.file(file.path, file.content)
  }

  const content = await zip.generateAsync({ type: 'nodebuffer' })

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="project-${projectId}.zip"`,
    },
  })
}
