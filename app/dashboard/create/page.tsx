'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, AlertCircle, CreditCard, ChevronRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const EXAMPLES = [
  'A modern plumbing company website for "QuickFix Plumbers" in Toronto. Include services page, about us, contact form with booking system. Use blue and white colors.',
  'Portfolio website for a freelance photographer specializing in weddings and portraits. Dark, elegant style with gallery, packages, and booking.',
  'Landing page for a SaaS project management tool called "FlowBoard". Clean, modern design with features, pricing table, and sign-up CTA.',
  'Restaurant website for "Bella Cucina" Italian restaurant in New York. Menu, reservations, about, and location. Warm, inviting design.',
]

const STEPS = [
  { label: 'Planning structure', duration: 3000 },
  { label: 'Generating code', duration: 20000 },
  { label: 'Reviewing & polishing', duration: 15000 },
  { label: 'Saving your website', duration: 2000 },
]

export default function CreatePage() {
  const { data: session } = useSession()
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(0)
  const router = useRouter()

  const credits = session?.user?.credits ?? 0
  const canGenerate = credits >= 50

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!prompt.trim() || !canGenerate) return

    setIsGenerating(true)
    setError('')
    setStep(0)

    // Simulate step progression
    let stepIndex = 0
    const interval = setInterval(() => {
      stepIndex++
      if (stepIndex < STEPS.length) {
        setStep(stepIndex)
      } else {
        clearInterval(interval)
      }
    }, 8000)

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      clearInterval(interval)
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Generation failed')

      router.push(`/dashboard/projects/${data.projectId}`)
    } catch (err: any) {
      clearInterval(interval)
      setError(err.message || 'Something went wrong. Please try again.')
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 mb-4"
          >
            ← Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Create New Website</h1>
          <p className="text-gray-600 mt-2">
            Describe your website in detail. The more specific you are, the better the result.
          </p>
        </div>

        {/* Credit check */}
        {!canGenerate && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <CreditCard className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">Not enough credits</p>
              <p className="text-sm text-amber-700 mt-1">
                You have <strong>{credits}</strong> credits. Website generation costs{' '}
                <strong>50 credits</strong>.
              </p>
              <Link
                href="/dashboard/billing"
                className="inline-flex items-center mt-2 text-sm font-medium text-amber-800 underline"
              >
                Buy credits →
              </Link>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="prompt" className="block text-sm font-semibold text-gray-700 mb-2">
                Describe your website
              </label>
              <textarea
                id="prompt"
                rows={6}
                disabled={isGenerating}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none disabled:opacity-60 disabled:bg-gray-50"
                placeholder="Example: A landing page for a yoga studio called 'Serenity Flow' in Austin TX. Include class schedule, pricing, about the instructor, and a newsletter signup. Use calming greens and earth tones."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-400">{prompt.length} / 2000 characters</p>
                <p className="text-sm text-gray-500">
                  Cost:{' '}
                  <span className="font-semibold text-gray-700">50 credits</span>
                  {credits > 0 && (
                    <span className="text-gray-400 ml-1">({credits} available)</span>
                  )}
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Try an example
              </p>
              <div className="space-y-2">
                {EXAMPLES.slice(0, 2).map((example, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPrompt(example)}
                    disabled={isGenerating}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-blue-300 hover:bg-blue-50 transition flex items-start gap-2 disabled:opacity-60"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{example}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-700 font-medium">Error</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Generation progress */}
            {isGenerating && (
              <div className="mb-5 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="space-y-2">
                  {STEPS.map((s, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 text-sm transition-all ${
                        i < step
                          ? 'text-green-600'
                          : i === step
                          ? 'text-blue-700 font-medium'
                          : 'text-gray-400'
                      }`}
                    >
                      {i < step ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">✓</span>
                        </div>
                      ) : i === step ? (
                        <Loader2 className="h-4 w-4 animate-spin flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                      )}
                      {s.label}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-blue-600 mt-3">
                  This usually takes 30–60 seconds. Please don't close this tab.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isGenerating || !prompt.trim() || !canGenerate}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating…
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate Website (50 credits)
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
