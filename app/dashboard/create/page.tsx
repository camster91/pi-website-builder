'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, AlertCircle, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function CreatePage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    setError('')
    
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        throw new Error(data.error || 'Generation failed')
      }
      
      // Redirect to the new project
      router.push(`/dashboard/projects/${data.projectId}`)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Website</h1>
          <p className="text-gray-600 mt-2">
            Describe the website you want to build. Be as specific as possible for best results.
          </p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Website Description
              </label>
              <textarea
                id="prompt"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Example: Create a modern plumbing website for a Toronto-based company called 'QuickFix Plumbers'. Include services, about us, contact form, and a booking system. Use blue and white colors, professional imagery."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Estimated cost: <span className="font-semibold">325 Pi Credits</span>
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-700 font-medium">Error</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex-1"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating with AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Website
                  </>
                )}
              </button>
              
              <Link
                href="/dashboard/billing"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Buy Credits
              </Link>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Tips for Best Results</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <span>Specify the industry or business type</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <span>Include preferred colors and design style</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <span>List required pages and features</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
              <span>Mention any specific functionality (contact forms, booking, etc.)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}