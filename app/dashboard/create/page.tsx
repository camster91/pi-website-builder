'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, AlertCircle, CreditCard, Loader2, CheckCircle2, Clock } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const EXAMPLES = [
  'A modern plumbing company website for "QuickFix Plumbers" in Toronto. Include services page, about us, contact form with booking system. Use blue and white colors.',
  'Portfolio website for a freelance photographer specializing in weddings and portraits. Dark, elegant style with gallery, packages, and booking.',
  'Landing page for a SaaS project management tool called "FlowBoard". Clean, modern design with features, pricing table, and sign-up CTA.',
  'Restaurant website for "Bella Cucina" Italian restaurant in New York. Menu, reservations, about, and location. Warm, inviting design.',
]

const PIPELINE_STEPS = [
  { id: 'planning', label: 'Planning website structure', icon: '🧠' },
  { id: 'coding',   label: 'Writing website code',      icon: '💻' },
  { id: 'review',   label: 'Reviewing & polishing',     icon: '✨' },
  { id: 'saving',   label: 'Saving your website',       icon: '💾' },
]

type StepStatus = 'waiting' | 'active' | 'done'

function matchStep(status: string): number {
  if (status.includes('Plan'))   return 0
  if (status.includes('Writ'))   return 1
  if (status.includes('Review')) return 2
  if (status.includes('Saving')) return 3
  return -1
}

export default function CreatePage() {
  const { data: session } = useSession()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [activeStep, setActiveStep] = useState(-1)
  const [doneSteps, setDoneSteps] = useState<number[]>([])
  const [statusMsg, setStatusMsg] = useState('')
  const router = useRouter()

  const credits = session?.user?.credits ?? 0
  const canGenerate = credits >= 50

  function getStepStatus(idx: number): StepStatus {
    if (doneSteps.includes(idx)) return 'done'
    if (activeStep === idx)      return 'active'
    return 'waiting'
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!prompt.trim() || !canGenerate) return

    setIsGenerating(true)
    setError('')
    setActiveStep(0)
    setDoneSteps([])
    setStatusMsg('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      if (!res.body) throw new Error('No stream')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let projectId: string | null = null

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value)
        const lines = text.split('\n').filter(l => l.startsWith('data: '))

        for (const line of lines) {
          try {
            const data = JSON.parse(line.replace('data: ', ''))

            if (data.error) {
              setError(data.error)
              setIsGenerating(false)
              return
            }

            if (data.status) {
              setStatusMsg(data.status)
              const stepIdx = matchStep(data.status)
              if (stepIdx >= 0) {
                // Mark previous steps done
                setDoneSteps(prev => {
                  const newDone = [...prev]
                  for (let i = 0; i < stepIdx; i++) {
                    if (!newDone.includes(i)) newDone.push(i)
                  }
                  return newDone
                })
                setActiveStep(stepIdx)
              }
            }

            if (data.success && data.projectId) {
              projectId = data.projectId
              setDoneSteps([0, 1, 2, 3])
              setActiveStep(-1)
              setStatusMsg('Done! Redirecting...')
            }
          } catch {}
        }
      }

      if (projectId) {
        router.push(`/dashboard/projects/${projectId}`)
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 mb-4">
            ← Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Create New Website</h1>
          <p className="text-gray-600 mt-2">Describe your website. The more specific you are, the better the result.</p>
        </div>

        {/* Credit check */}
        {!canGenerate && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <CreditCard className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">Not enough credits</p>
              <p className="text-sm text-amber-700 mt-1">
                You have <strong>{credits}</strong> credits. Website generation costs <strong>50 credits</strong>.
              </p>
              <Link href="/dashboard/billing" className="inline-flex items-center mt-2 text-sm font-medium text-amber-800 underline">
                Get more credits →
              </Link>
            </div>
          </div>
        )}

        {/* Generating overlay */}
        {isGenerating && (
          <div className="mb-8 p-6 bg-white border-2 border-blue-100 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center animate-pulse">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Building your website</p>
                <p className="text-sm text-gray-500">{statusMsg || 'Starting up...'}</p>
              </div>
            </div>

            <div className="space-y-3">
              {PIPELINE_STEPS.map((step, idx) => {
                const s = getStepStatus(idx)
                return (
                  <div key={step.id} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    s === 'active' ? 'bg-blue-50 border border-blue-200' :
                    s === 'done'   ? 'bg-green-50 border border-green-200' :
                                     'bg-gray-50 border border-gray-100 opacity-50'
                  }`}>
                    <span className="text-xl w-8 text-center">
                      {s === 'done'   ? '✅' :
                       s === 'active' ? <Loader2 className="h-5 w-5 animate-spin text-blue-600 inline" /> :
                                        step.icon}
                    </span>
                    <span className={`text-sm font-medium ${
                      s === 'active' ? 'text-blue-700' :
                      s === 'done'   ? 'text-green-700' :
                                       'text-gray-500'
                    }`}>
                      {step.label}
                    </span>
                    {s === 'done' && <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />}
                    {s === 'active' && <Clock className="h-4 w-4 text-blue-500 ml-auto animate-pulse" />}
                  </div>
                )
              })}
            </div>

            <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-700"
                style={{ width: `${doneSteps.length === 4 ? 100 : (doneSteps.length / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Form */}
        {!isGenerating && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your website <span className="text-red-500">*</span>
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={5}
                placeholder="e.g. A modern plumbing company website for QuickFix Plumbers in Toronto..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                required
              />
              <p className="text-xs text-gray-400 mt-1">{prompt.length}/2000 characters</p>
            </div>

            {/* Example prompts */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Or try an example:</p>
              <div className="grid grid-cols-1 gap-2">
                {EXAMPLES.map((ex, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPrompt(ex)}
                    className="text-left p-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-blue-300 hover:bg-blue-50 transition"
                  >
                    {ex.substring(0, 90)}...
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <span>Cost: <strong className="text-gray-800">50 credits</strong></span>
              <span>Balance: <strong className={credits >= 50 ? 'text-green-600' : 'text-red-600'}>{credits} credits</strong></span>
            </div>

            <button
              type="submit"
              disabled={!canGenerate || !prompt.trim()}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              <Sparkles className="h-5 w-5" />
              Generate Website
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
