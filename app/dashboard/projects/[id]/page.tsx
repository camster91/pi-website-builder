import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Eye, Code, Download, Share, Settings, Globe } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return notFound()
  }
  
  const project = await prisma.project.findUnique({
    where: {
      id,
      userId: session.user.id,
    },
    include: {
      site: true,
    },
  })
  
  if (!project) {
    return notFound()
  }
  
  const hasLiveSite = project.site?.subdomain
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-sm text-gray-600">Status</span>
                <div className="font-medium">{project.status}</div>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-sm text-gray-600">Created</span>
                <div className="font-medium">{new Date(project.createdAt).toLocaleDateString()}</div>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-lg">
                <span className="text-sm text-gray-600">Credits Used</span>
                <div className="font-medium">{project.creditsUsed}</div>
              </div>
            </div>
          </div>
          
          {/* Website Preview */}
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-8">
            <div className="border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Globe className="text-gray-500 mr-3 h-5 w-5" />
                <div>
                  <h3 className="font-medium">Live Preview</h3>
                  {hasLiveSite && (
                    <p className="text-sm text-gray-500">https://{project.site?.subdomain}.pi-website.dev</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                {hasLiveSite ? (
                  <Link
                    href={`https://${project.site?.subdomain}.pi-website.dev`}
                    target="_blank"
                    className="inline-flex items-center px-3 py-1.5 text-sm bg-green-100 text-green-800 font-medium rounded-lg hover:bg-green-200"
                  >
                    <Globe className="mr-1.5 h-3.5 w-3.5" />
                    Visit Live Site
                  </Link>
                ) : (
                  <button className="inline-flex items-center px-3 py-1.5 text-sm bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200">
                    <Globe className="mr-1.5 h-3.5 w-3.5" />
                    Not Deployed
                  </button>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                    <Eye className="h-6 w-6 text-gray-500" />
                  </div>
                  <p className="text-gray-600">Website preview will appear here</p>
                  <p className="text-sm text-gray-500 mt-1">Interactive editing with pin-based comments</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Files */}
          <div className="bg-white rounded-xl border shadow-sm">
            <div className="border-b px-6 py-4">
              <h3 className="font-medium">Generated Files</h3>
              <p className="text-sm text-gray-500 mt-1">HTML, CSS, JavaScript, and assets created by AI</p>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {['index.html', 'styles.css', 'script.js', 'assets/images/', 'assets/fonts/'].map((file) => (
                  <div key={file} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <Code className="text-gray-400 mr-3 h-5 w-5" />
                      <div>
                        <div className="font-medium">{file}</div>
                        <div className="text-sm text-gray-500">
                          {file.endsWith('/') ? 'Directory' : 'File'} • {file.endsWith('.html') ? '2.4 KB' : 
                          file.endsWith('.css') ? '1.8 KB' : 
                          file.endsWith('.js') ? '0.9 KB' : 'Multiple files'}
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t flex justify-end">
                <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download ZIP
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
            <h3 className="font-medium text-lg mb-4">Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <Share className="text-gray-500 mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Share</div>
                    <div className="text-sm text-gray-500">Get shareable link</div>
                  </div>
                </div>
                <div className="text-gray-400">→</div>
              </button>
              <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <Code className="text-gray-500 mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Edit Code</div>
                    <div className="text-sm text-gray-500">Open in code editor</div>
                  </div>
                </div>
                <div className="text-gray-400">→</div>
              </button>
              <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <Globe className="text-gray-500 mr-3 h-5 w-5" />
                  <div>
                    <div className="font-medium">Deploy</div>
                    <div className="text-sm text-gray-500">Publish to live domain</div>
                  </div>
                </div>
                <div className="text-gray-400">→</div>
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border shadow-sm p-6">
            <h3 className="font-medium text-lg mb-4">AI Generation Details</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Original Prompt</div>
                <div className="p-3 bg-gray-50 rounded-lg text-sm">{project.prompt}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Model Used</div>
                <div className="font-medium">{project.modelUsed || 'Gemini 2.5 Pro + Flash'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Tokens Used</div>
                <div className="font-medium">{project.tokensUsed || '1,240'}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Generation Time</div>
                <div className="font-medium">{project.generationTime || '45 seconds'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}