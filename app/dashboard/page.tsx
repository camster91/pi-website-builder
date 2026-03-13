import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Plus, FileCode, Globe, CreditCard } from 'lucide-react'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Please sign in to access your dashboard</h1>
        <Link
          href="/api/auth/signin"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign In
        </Link>
      </div>
    )
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
    include: {
      projects: {
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    },
  })

  const credits = user?.credits || 0
  const projects = user?.projects || []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Welcome back, {session.user?.name}!</h1>
        <p className="text-gray-600">Manage your websites, credits, and settings.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Available Credits</p>
              <p className="text-3xl font-bold">{credits.toLocaleString()}</p>
            </div>
          </div>
          <Link
            href="/dashboard/billing"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Buy more credits →
          </Link>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <FileCode className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Projects</p>
              <p className="text-3xl font-bold">{projects.length}</p>
            </div>
          </div>
          <Link
            href="/dashboard/projects"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View all projects →
          </Link>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Live Websites</p>
              <p className="text-3xl font-bold">
                {projects.filter(p => p.status === 'LIVE').length}
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/sites"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Manage sites →
          </Link>
        </div>
      </div>

      {/* Create New Project */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Create a new website with AI</h2>
            <p className="text-gray-700">
              Describe your website and let Pi generate it in minutes.
            </p>
          </div>
          <Link
            href="/dashboard/create"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            <Plus className="mr-2 h-5 w-5" />
            New Website
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <Link
            href="/dashboard/projects"
            className="text-blue-600 hover:text-blue-800"
          >
            View all
          </Link>
        </div>
        
        {projects.length === 0 ? (
          <div className="bg-white border rounded-xl p-12 text-center">
            <FileCode className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
            <p className="text-gray-600 mb-6">
              Create your first AI-generated website to get started.
            </p>
            <Link
              href="/dashboard/create"
              className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Website
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'LIVE' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'GENERATING'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description || 'No description'}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Created {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/dashboard/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Open →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}