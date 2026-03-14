'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { 
  Wand2, 
  ChevronRight, 
  ArrowLeft, 
  Check, 
  Loader2, 
  AlertCircle, 
  RefreshCw, 
  Eye 
} from 'lucide-react'
import { DESIGN_STYLES, INDUSTRY_FILTERS, getSuggestedStyles } from '@/lib/design-styles'
import { COLOR_PALETTES, PALETTE_CATEGORIES, type ColorPalette } from '@/lib/color-palettes'
import { Upload, Palette, X } from 'lucide-react'

type Step = 'describe' | 'style' | 'building'

type SectionState = {
  type: string
  title: string
  status: 'pending' | 'generating' | 'complete' | 'failed'
  order: number
  message?: string // Added conversational message
}

type Plan = {
  projectName?: string
  title?: string
  tagline?: string
  hasPricing?: boolean
  suggestions?: string[]
  sections?: Array<{
    type: string
    title: string
    order: number
  }>
  [key: string]: any  // allow extra fields from Gemini plan
}

const EXAMPLE_PROMPTS = [
  "A modern SaaS landing page for an AI-powered analytics platform with pricing tiers and feature comparison",
  "An elegant restaurant website with online menu, reservation system, and photo gallery",
  "A minimalist portfolio site for a graphic designer showcasing creative projects and client testimonials",
  "A professional law firm website with attorney bios, practice areas, and consultation booking"
]

const SECTION_STATUS_PHRASES: Record<string, string[]> = {
  hero: ["Sketching your first impression...", "Crafting a powerful hero...", "Setting the stage..."],
  'social-proof': ["Adding credibility...", "Highlighting your impact...", "Showcasing your supporters..."],
  features: ["Detailing your unique power...", "Translating benefits to value...", "Refining your core offering..."],
  about: ["Writing your unique story...", "Defining your vision...", "Crafting your brand identity..."],
  testimonials: ["Adding social resonance...", "Listening to your customers...", "Amplifying trust..."],
  cta: ["Polishing the call to action...", "Designing the closing move...", "Defining the next step..."],
  contact: ["Making it easy to connect...", "Setting up the conversation...", "Designing your outreach..."],
  footer: ["Rounding out your site...", "Finalizing the details...", "Adding the finishing touch..."],
  pricing: ["Laying out your pricing...", "Structuring your offer...", "Making the value clear..."],
  faq: ["Answering your visitors' questions...", "Clearing up confusion...", "Building confidence..."],
  process: ["Mapping your workflow...", "Illustrating the journey...", "Showing how it works..."],
  default: ["Polishing this section...", "Refining your content...", "Adding some human flair..."]
}

function getStatusMessage(type: string): string {
  const phrases = SECTION_STATUS_PHRASES[type] || SECTION_STATUS_PHRASES.default
  return phrases[Math.floor(Math.random() * phrases.length)]
}

const HUMAN_MESSAGES = {
  error: [
    "Hmm, something didn't go quite as planned. Let me try that again...",
    "Oops! That didn't work out. Let's give it another go.",
    "Bumping into a snag, but I'm working on it!"
  ],
  loading: [
    "Finding the right look...",
    "Brewing some design magic...",
    "Piecing together your vision..."
  ]
}

function getHumanMessage(category: keyof typeof HUMAN_MESSAGES): string {
  const messages = HUMAN_MESSAGES[category]
  return messages[Math.floor(Math.random() * messages.length)]
}

// --- Intentional Imperfection Helper ---
const getRandomTilt = () => Math.random() > 0.8 ? `rotate(${Math.random() * 2 - 1}deg)` : 'none'

export default function CreatePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // State
  const [step, setStep] = useState<Step>('describe')
  const [density, setDensity] = useState<'spacious' | 'tight'>('spacious') // Added
  const [prompt, setPrompt] = useState('')
  const [plan, setPlan] = useState<Plan | null>(null)
  const [styleId, setStyleId] = useState<string>('')
  const [projectId, setProjectId] = useState<string>('')
  const [sections, setSections] = useState<SectionState[]>([])
  const [styleFilter, setStyleFilter] = useState('')
  const [showAllStyles, setShowAllStyles] = useState(false)

  // Color customization
  const [showColorPanel, setShowColorPanel] = useState(false)
  const [paletteId, setPaletteId] = useState<string>('')
  const [paletteCategory, setPaletteCategory] = useState('All')
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string>('')
  const [extractedColors, setExtractedColors] = useState<Record<string,string> | null>(null)
  const [isExtractingColors, setIsExtractingColors] = useState(false)
  const logoInputRef = useRef<HTMLInputElement>(null)
  
  // Loading and error states
  const [isLoadingPlan, setIsLoadingPlan] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Refs
  const previewFrameRef = useRef<HTMLIFrameElement>(null)
  const previewRefreshInterval = useRef<NodeJS.Timeout | null>(null)

  // Auth check
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (previewRefreshInterval.current) clearInterval(previewRefreshInterval.current)
    }
  }, [])

  // Step 1: Generate plan
  const handleContinue = async () => {
    if (!prompt.trim()) {
      setError('Please describe your website')
      return
    }

    setIsLoadingPlan(true)
    setError(null)

    try {
      const response = await fetch('/api/generate/plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate plan')
      }

      const data = await response.json()
      setPlan(data)
      setStep('style')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate plan')
    } finally {
      setIsLoadingPlan(false)
    }
  }

  // Step 2: Start generation
  const handleGenerateWebsite = async () => {
    if (!styleId) {
      setError('Please select a style')
      return
    }

    setIsGenerating(true)
    setError(null)

    try {
      // Initialize sections from plan
      if (plan?.sections) {
        const initialSections: SectionState[] = plan.sections.map((s) => ({
          type: s.type,
          title: s.title,
          status: 'pending' as const,
          order: s.order,
        }))
        setSections(initialSections)
      }

      // Initialize sections list immediately from plan so UI shows pending state
      const sectionTypes = [
        { type: 'hero', title: 'Hero' },
        { type: 'social-proof', title: 'Social Proof' },
        { type: 'features', title: 'Features' },
        { type: 'about', title: 'About' },
        { type: 'testimonials', title: 'Testimonials' },
        ...(plan?.hasPricing ? [{ type: 'pricing', title: 'Pricing' }] : []),
        { type: 'cta', title: 'CTA Banner' },
        { type: 'contact', title: 'Contact' },
        { type: 'footer', title: 'Footer' },
      ]
      setSections(sectionTypes.map((s, i) => ({ ...s, status: 'pending' as const, order: i })))
      setStep('building')
      startPreviewRefresh()

      // POST and consume the SSE stream directly from the response body
      const response = await fetch('/api/generate/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          styleId,
          plan,
          paletteId: paletteId || undefined,
          customColors: extractedColors || undefined,
        }),
      })

      if (!response.ok) {
        const text = await response.text()
        let msg = 'Failed to start generation'
        try { msg = JSON.parse(text).error ?? msg } catch {}
        throw new Error(msg)
      }

      if (!response.body) throw new Error('No response stream')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          try {
            const msg = JSON.parse(line.slice(6))
            handleSSEMessage(msg)
          } catch {}
        }
      }

      setIsGenerating(false)
      if (previewRefreshInterval.current) clearInterval(previewRefreshInterval.current)
      if (previewFrameRef.current) {
        // Force final reload
        const src = previewFrameRef.current.src
        previewFrameRef.current.src = ''
        setTimeout(() => { if (previewFrameRef.current) previewFrameRef.current.src = src }, 100)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate website')
      setIsGenerating(false)
    }
  }

  const handleSSEMessage = (data: any) => {
    if (data.type === 'project_created') {
      setProjectId(data.projectId)
    } else if (data.type === 'section_start') {
      setSections(prev => prev.map(s => s.type === data.section ? { 
        ...s, 
        status: 'generating',
        message: getStatusMessage(s.type) // Set the message here
      } : s))
    } else if (data.type === 'section_done') {
      setSections(prev => prev.map(s => s.type === data.section ? { ...s, status: 'complete', message: undefined } : s))
    } else if (data.type === 'section_error') {
      setSections(prev => prev.map(s => s.type === data.section ? { ...s, status: 'failed', message: 'Failed to build' } : s))
    } else if (data.type === 'complete') {
      setProjectId(data.projectId)
      setSections(prev => prev.map(s => s.status === 'generating' ? { ...s, status: 'complete', message: undefined } : s))
    } else if (data.type === 'error') {
      setError(data.message)
    }
  }

  // Preview refresh
  const startPreviewRefresh = () => {
    previewRefreshInterval.current = setInterval(() => {
      if (previewFrameRef.current) {
        previewFrameRef.current.src = previewFrameRef.current.src
      }
    }, 3000)
  }

  // Regenerate section
  const handleRegenerateSection = async (sectionType: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.type === sectionType
          ? { ...s, status: 'generating' }
          : s
      )
    )

    try {
      const response = await fetch('/api/generate/regenerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId,
          sectionType,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to regenerate section')
      }

      // The SSE will handle updating the status
    } catch (err) {
      setSections((prev) =>
        prev.map((s) =>
          s.type === sectionType
            ? { ...s, status: 'failed' }
            : s
        )
      )
      setError(err instanceof Error ? err.message : 'Failed to regenerate section')
    }
  }

  // Scroll to section in preview
  const scrollToSection = (sectionType: string) => {
    if (previewFrameRef.current?.contentWindow) {
      previewFrameRef.current.contentWindow.postMessage(
        { type: 'scrollToSection', section: sectionType },
        '*'
      )
    }
  }

  // Get filtered styles
  const getFilteredStyles = () => {
    if (!styleFilter) return DESIGN_STYLES
    return DESIGN_STYLES.filter((style) =>
      style.industries.some(i => i.includes(styleFilter)) ||
      style.tags.some(t => t.toLowerCase().includes(styleFilter))
    )
  }

  // Calculate progress
  const completedSections = sections.filter((s) => s.status === 'complete').length
  const totalSections = sections.length
  const progressPercentage = totalSections > 0 ? (completedSections / totalSections) * 100 : 0

  // Render step indicator
  const renderStepIndicator = () => {
    const steps = ['describe', 'style', 'building']
    const currentIndex = steps.indexOf(step)

    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((s, index) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                index <= currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300'
              }`}
            />
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-0.5 transition-all ${
                  index < currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  // Handle logo upload + color extraction
  const handleLogoUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) return
    setLogoFile(file)
    setLogoPreview(URL.createObjectURL(file))
    setIsExtractingColors(true)
    setExtractedColors(null)
    setPaletteId('')
    try {
      const fd = new FormData()
      fd.append('logo', file)
      const res = await fetch('/api/extract-colors', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Extraction failed')
      const data = await res.json()
      setExtractedColors(data.palette)
    } catch {
      setError('Could not extract colors from logo. Try a different image.')
    } finally {
      setIsExtractingColors(false)
    }
  }

  const getFilteredPalettes = () => {
    if (!paletteCategory || paletteCategory === 'All') return COLOR_PALETTES
    return COLOR_PALETTES.filter(p => p.category === paletteCategory.toLowerCase())
  }

  // Get the active color override (logo-extracted or palette)
  const activeColorOverride = extractedColors ?? (paletteId ? COLOR_PALETTES.find(p => p.id === paletteId)?.colors : null)

  // Render color swatches
  const renderColorSwatches = (style: typeof DESIGN_STYLES[0]) => {
    const colors = [
      style.tokens.colors.primary,
      style.tokens.colors.accent,
      style.tokens.colors.bg,
      style.tokens.colors.bgCard,
      style.tokens.colors.text,
    ]

    return (
      <div className="flex gap-1.5 mb-3">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    )
  }

  // Render style card
  const renderStyleCard = (style: typeof DESIGN_STYLES[0], isSelected: boolean) => {
    return (
      <button
        key={style.id}
        onClick={() => setStyleId(style.id)}
        style={{ transform: getRandomTilt() }}
        className={`p-4 rounded-xl border-2 transition-all hover:shadow-lg text-left ${
          isSelected
            ? 'border-blue-600 ring-2 ring-blue-200 bg-blue-50'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        {renderColorSwatches(style)}
        
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: style.tokens.typography.fontHeading }}
        >
          {style.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{style.emoji}</span>
          <span className="text-sm font-medium text-gray-700">{style.name}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{style.description}</p>
        
        <div className="flex flex-wrap gap-1.5">
          {style.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>
    )
  }

  // Render section status icon
  const renderSectionStatusIcon = (status: SectionState['status']) => {
    switch (status) {
      case 'generating':
        return <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
      case 'complete':
        return (
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        )
      case 'failed':
        return (
          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
            <AlertCircle className="w-3 h-3 text-white" />
          </div>
        )
      case 'pending':
        return <div className="w-5 h-5 rounded-full bg-gray-300" />
      default:
        return null
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {renderStepIndicator()}

        {/* Step 1: DESCRIBE */}
        {step === 'describe' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Build Your Website
              </h1>
              <p className="text-lg text-gray-600">
                Describe what you want — our AI handles the rest
              </p>
            </div>

            <div className={`bg-white rounded-2xl shadow-xl ${density === 'spacious' ? 'p-12' : 'p-6'} mb-6`}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your website
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => {
                    if (e.target.value.length <= 2000) {
                      setPrompt(e.target.value)
                      setError(null)
                    }
                  }}
                  placeholder="E.g., A modern SaaS landing page for an AI-powered analytics platform..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[140px]"
                  rows={6}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    {prompt.length} / 2000 characters
                  </span>
                  {prompt.length >= 1900 && (
                    <span className="text-sm text-orange-600 font-medium">
                      Approaching limit
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Try an example:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {EXAMPLE_PROMPTS.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setPrompt(example)
                        setError(null)
                      }}
                      className="px-4 py-3 text-sm text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <button
                onClick={handleContinue}
                disabled={isLoadingPlan || !prompt.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isLoadingPlan ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing your request...
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: STYLE PICKER */}
        {step === 'style' && (
          <div>
            <div className="mb-6">
              <button
                onClick={() => {
                  setStep('describe')
                  setError(null)
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Choose Your Style
              </h1>
              <p className="text-lg text-gray-600">
                Our AI suggests the best matches. Browse all 20+ styles or pick one of the AI recommendations.
              </p>
            </div>

            {/* AI Suggestions */}
            {plan?.suggestions && plan.suggestions.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    AI Recommended Styles
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {plan.suggestions.map((suggestionId) => {
                    const style = DESIGN_STYLES.find((s) => s.id === suggestionId)
                    if (!style) return null
                    return renderStyleCard(style, styleId === style.id)
                  })}
                </div>
              </div>
            )}

            {/* Browse All Toggle */}
            <div className="mb-6">
              <button
                onClick={() => setShowAllStyles(!showAllStyles)}
                className="w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-all flex items-center justify-center gap-2 text-gray-700 font-medium"
              >
                <Eye className="w-5 h-5" />
                {showAllStyles ? 'Hide' : 'Browse'} All Styles
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    showAllStyles ? 'rotate-90' : ''
                  }`}
                />
              </button>
            </div>

            {/* All Styles Grid */}
            {showAllStyles && (
              <div className="mb-8">
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Filter by industry:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {INDUSTRY_FILTERS.map((filter) => (
                      <button
                        key={filter.value}
                        onClick={() => setStyleFilter(filter.value)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          styleFilter === filter.value
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {getFilteredStyles().map((style) =>
                    renderStyleCard(style, styleId === style.id)
                  )}
                </div>
              </div>
            )}

            {/* ── Color Customization Panel ── */}
            <div className="mb-6 border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setShowColorPanel(!showColorPanel)}
                className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Customize Colors</span>
                    {activeColorOverride && (
                      <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                        {extractedColors ? '🎨 Logo colors applied' : `✓ ${COLOR_PALETTES.find(p=>p.id===paletteId)?.name}`}
                      </span>
                    )}
                    {!activeColorOverride && (
                      <span className="ml-2 text-xs text-gray-500">Optional — upload logo or pick palette</span>
                    )}
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${showColorPanel ? 'rotate-90' : ''}`} />
              </button>

              {showColorPanel && (
                <div className="border-t border-gray-200 bg-gray-50 p-5 space-y-6">

                  {/* Logo Upload */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Upload className="w-4 h-4" /> Extract colors from your logo
                    </h3>
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all relative"
                      onClick={() => logoInputRef.current?.click()}
                      onDragOver={e => e.preventDefault()}
                      onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if(f) handleLogoUpload(f) }}
                    >
                      <input
                        ref={logoInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={e => { const f = e.target.files?.[0]; if(f) handleLogoUpload(f) }}
                      />
                      {logoPreview ? (
                        <div className="flex items-center gap-4">
                          <img src={logoPreview} alt="Logo" className="h-14 object-contain rounded-lg bg-white p-1 border border-gray-200" />
                          <div className="flex-1 text-left">
                            <p className="font-medium text-gray-800 text-sm">{logoFile?.name}</p>
                            {isExtractingColors && (
                              <p className="text-xs text-purple-600 flex items-center gap-1 mt-1">
                                <Loader2 className="w-3 h-3 animate-spin" /> Extracting colors...
                              </p>
                            )}
                            {extractedColors && !isExtractingColors && (
                              <div className="flex gap-1.5 mt-2">
                                {Object.entries(extractedColors).slice(0,6).map(([k,v]) => (
                                  <div key={k} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" style={{backgroundColor: v as string}} title={`${k}: ${v}`} />
                                ))}
                                <span className="text-xs text-green-600 font-medium ml-1 self-center">Applied!</span>
                              </div>
                            )}
                          </div>
                          <button
                            onClick={e => { e.stopPropagation(); setLogoFile(null); setLogoPreview(''); setExtractedColors(null) }}
                            className="text-gray-400 hover:text-red-500 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-700">Drop your logo here or click to upload</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG, SVG, WebP — up to 5MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-xs text-gray-500 font-medium">OR CHOOSE A PALETTE</span>
                    <div className="flex-1 h-px bg-gray-300" />
                  </div>

                  {/* Palette Category Filters */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {PALETTE_CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setPaletteCategory(cat)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            paletteCategory === cat
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-400'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Palette Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-h-72 overflow-y-auto pr-1">
                      {getFilteredPalettes().map(palette => (
                        <button
                          key={palette.id}
                          onClick={() => { setPaletteId(palette.id === paletteId ? '' : palette.id); setExtractedColors(null); setLogoFile(null); setLogoPreview('') }}
                          className={`p-3 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                            paletteId === palette.id
                              ? 'border-purple-600 ring-2 ring-purple-200 bg-white'
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                        >
                          {/* Color dots */}
                          <div className="flex gap-1 mb-2">
                            {[palette.colors.primary, palette.colors.accent, palette.colors.bg, palette.colors.text].map((c,i) => (
                              <div key={i} className="w-5 h-5 rounded-full border border-white shadow-sm flex-shrink-0" style={{backgroundColor: c}} />
                            ))}
                          </div>
                          <p className="text-xs font-semibold text-gray-800 leading-tight">{palette.emoji} {palette.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {activeColorOverride && (
                    <div className="flex items-center justify-between bg-white rounded-lg border border-purple-200 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          {Object.values(activeColorOverride).slice(0,5).map((c,i) => (
                            <div key={i} className="w-5 h-5 rounded-full border-2 border-white shadow" style={{backgroundColor: c as string}} />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-purple-800">
                          {extractedColors ? 'Logo palette active' : `${COLOR_PALETTES.find(p=>p.id===paletteId)?.name} palette active`}
                        </span>
                      </div>
                      <button
                        onClick={() => { setPaletteId(''); setExtractedColors(null); setLogoFile(null); setLogoPreview('') }}
                        className="text-xs text-gray-500 hover:text-red-600 font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Generate Button */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 -mx-4">
              <div className="max-w-6xl mx-auto">
                <button
                  onClick={handleGenerateWebsite}
                  disabled={!styleId || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Starting generation...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      Generate Website
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: SECTION BUILDER */}
        {step === 'building' && (
          <div>
            {/* Progress Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h1 className="text-3xl font-bold text-gray-900">
                  Building {plan?.projectName || 'Your Website'}...
                </h1>
                <span className="text-lg font-medium text-gray-600">
                  {completedSections} of {totalSections} sections complete
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Main Content: Section List + Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Panel: Section List */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Sections
                  </h2>
                  <div className="space-y-3">
                    {sections
                      .sort((a, b) => a.order - b.order)
                      .map((section) => (
                        <div
                          key={section.type}
                          className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <button
                            onClick={() => {
                              if (section.status === 'complete') {
                                scrollToSection(section.type)
                              }
                            }}
                            className="flex items-center gap-3 flex-1 text-left"
                            disabled={section.status !== 'complete'}
                          >
                            {renderSectionStatusIcon(section.status)}
                            <span
                              className={`font-medium ${
                                section.status === 'complete'
                                  ? 'text-gray-900'
                                  : 'text-gray-600'
                              }`}
                            >
                              {section.title}
                              {section.status === 'generating' && section.message && (
                                <p className="text-xs text-blue-600 mt-0.5 animate-pulse">{section.message}</p>
                              )}
                            </span>
                          </button>

                          {section.status === 'complete' && (
                            <button
                              onClick={() => handleRegenerateSection(section.type)}
                              disabled={isGenerating}
                              className="p-2 text-gray-400 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Regenerate section"
                            >
                              <RefreshCw className="w-4 h-4" />
                            </button>
                          )}

                          {section.status === 'failed' && (
                            <button
                              onClick={() => handleRegenerateSection(section.type)}
                              disabled={isGenerating}
                              className="px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Retry
                            </button>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Right Panel: Live Preview */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Live Preview
                    </h2>
                    {isGenerating && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating...
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    {/* Loading overlay for first section */}
                    {completedSections === 0 && (
                      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-xl">
                        <div className="text-center">
                          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                          <p className="text-gray-600 font-medium">
                            Building your first section...
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Preview iframe */}
                    <iframe
                      ref={previewFrameRef}
                      src={projectId ? `/api/preview/${projectId}` : 'about:blank'}
                      className="w-full h-[600px] rounded-xl border border-gray-200 shadow-inner"
                      title="Website Preview"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Completion Button */}
            {completedSections === totalSections && totalSections > 0 && (
              <div className="mt-8 text-center">
                <div className="inline-block bg-green-50 border border-green-200 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900">
                      Your website is ready!
                    </h3>
                  </div>
                  <p className="text-green-700">
                    All sections have been generated successfully.
                  </p>
                </div>

                <button
                  onClick={() => router.push(`/dashboard/projects/${projectId}`)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  View Your Website
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
