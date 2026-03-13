import { notFound, redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import {
  Globe,
  Settings,
  Clock,
  Coins,
  Cpu,
  Calendar,
  ArrowLeft,
  AlertTriangle,
  Loader2,
} from 'lucide-react'
import Link from 'next/link'
import ProjectClient from './ProjectClient'

import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = await prisma.project.findUnique({ where: { id }, select: { name: true, description: true } })
  return {
    title: project ? `${project.name} — Pi Website Builder` : 'Project',
    description: project?.description ?? 'AI-generated website',
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    redirect('/auth/signin')
  }

  const project = await prisma.project.findFirst({
    where: { id, userId: session.user.id },
    include: {
      files: { orderBy: { path: 'asc' } },
      pins: { orderBy: { createdAt: 'desc' } },
    },
  })

  if (!project) {
    notFound()
  }

  const statusColors: Record<string, string> = {
    DRAFT: 'bg-gray-100 text-gray-700',
    GENERATING: 'bg-yellow-100 text-yellow-700',
    LIVE: 'bg-green-100 text-green-700',
    FAILED: 'bg-red-100 text-red-700',
    ARCHIVED: 'bg-slate-100 text-slate-700',
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/dashboard"
          className="flex items-center text-gray-500 hover:text-gray-700 text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Dashboard
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-700 truncate max-w-xs">{project.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate">{project.name}</h1>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status] || statusColors.DRAFT}`}
                >
                  {project.status}
                </span>
              </div>
              {project.description && (
                <p className="text-gray-500 text-sm">{project.description}</p>
              )}
            </div>
          </div>

          {/* Generating state */}
          {project.status === 'GENERATING' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-center gap-3 mb-6">
              <Loader2 className="h-5 w-5 text-yellow-600 animate-spin flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-800">Generating your website…</p>
                <p className="text-sm text-yellow-700">
                  This may take 30–60 seconds. Refresh the page to check progress.
                </p>
              </div>
            </div>
          )}

          {/* Failed state */}
          {project.status === 'FAILED' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-center gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-800">Generation failed</p>
                <p className="text-sm text-red-700">
                  Something went wrong. You have not been charged. Please try again.
                </p>
              </div>
            </div>
          )}

          {/* Client component handles interactive features */}
          <ProjectClient
            projectId={project.id}
            projectName={project.name}
            hasFiles={project.files.length > 0}
            liveUrl={project.liveUrl}
            subdomain={project.subdomain}
            status={project.status}
            files={project.files}
            initialPins={project.pins.map((p) => ({
              ...p,
              createdAt: p.createdAt.toISOString(),
              status: p.status as string,
            }))}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:w-72 space-y-4">
          {/* Live site info */}
          {project.status === 'LIVE' && project.liveUrl && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800 text-sm">Live</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 text-sm underline break-all"
              >
                {project.liveUrl}
              </a>
            </div>
          )}

          {/* Generation details */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <h3 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wide">
              Details
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>{new Date(project.createdAt).toLocaleDateString()}</span>
              </div>
              {project.modelUsed && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Cpu className="h-4 w-4 text-gray-400" />
                  <span>{project.modelUsed}</span>
                </div>
              )}
              {project.generationTime && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{project.generationTime}s generation time</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <Coins className="h-4 w-4 text-gray-400" />
                <span>{project.creditsUsed} credits used</span>
              </div>
              {project.tokensUsed && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Settings className="h-4 w-4 text-gray-400" />
                  <span>{project.tokensUsed.toLocaleString()} tokens</span>
                </div>
              )}
            </div>
          </div>

          {/* Prompt */}
          {project.prompt && (
            <div className="bg-white rounded-xl border shadow-sm p-4">
              <h3 className="font-semibold text-sm text-gray-700 mb-2 uppercase tracking-wide">
                Prompt
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{project.prompt}</p>
            </div>
          )}

          {/* Files list */}
          {project.files.length > 0 && (
            <div className="bg-white rounded-xl border shadow-sm p-4">
              <h3 className="font-semibold text-sm text-gray-700 mb-3 uppercase tracking-wide">
                Files ({project.files.length})
              </h3>
              <ul className="space-y-2">
                {project.files.map((f) => (
                  <li key={f.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 truncate">{f.path}</span>
                    <span className="text-gray-400 text-xs ml-2 flex-shrink-0">
                      {f.size > 0
                        ? f.size < 1024
                          ? `${f.size} B`
                          : `${(f.size / 1024).toFixed(1)} KB`
                        : '—'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
