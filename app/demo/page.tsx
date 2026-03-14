import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo — Pi Website Builder',
  description: 'See what Pi Website Builder can create with AI',
}

const DEMO_SITES = [
  {
    name: 'QuickFix Plumbers',
    description: 'Modern plumbing company site with booking form',
    prompt: 'A modern plumbing company website for "QuickFix Plumbers" in Toronto',
    tags: ['Business', 'Services', 'Blue & White'],
    emoji: '🔧',
  },
  {
    name: 'Wedding Photographer Portfolio',
    description: 'Dark elegant portfolio with gallery and packages',
    prompt: 'Portfolio for freelance photographer specializing in weddings',
    tags: ['Portfolio', 'Dark', 'Gallery'],
    emoji: '📸',
  },
  {
    name: 'FlowBoard SaaS Landing',
    description: 'Clean SaaS landing page with pricing table',
    prompt: 'Landing page for FlowBoard project management SaaS tool',
    tags: ['SaaS', 'Modern', 'Pricing'],
    emoji: '🚀',
  },
  {
    name: 'Bella Cucina Restaurant',
    description: 'Warm Italian restaurant site with menu & reservations',
    prompt: 'Restaurant website for Bella Cucina Italian restaurant in New York',
    tags: ['Restaurant', 'Warm', 'Menu'],
    emoji: '🍝',
  },
]

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">See What Pi Can Build</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          These are real examples of what Pi Website Builder generates from a simple text prompt — in under 60 seconds.
        </p>
        <Link
          href="/auth/signup"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
        >
          <Sparkles className="h-5 w-5" />
          Try it Free — 100 credits included
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {DEMO_SITES.map((site) => (
          <div key={site.name} className="bg-white border rounded-2xl p-6 hover:shadow-md transition">
            <div className="text-4xl mb-3">{site.emoji}</div>
            <h2 className="text-lg font-bold text-gray-900">{site.name}</h2>
            <p className="text-gray-500 text-sm mt-1 mb-4">{site.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {site.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">{tag}</span>
              ))}
            </div>
            <p className="text-xs text-gray-400 italic border-t pt-3">Prompt: "{site.prompt}"</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to build yours?</h2>
        <p className="text-gray-600 mb-6">Sign up free and get 100 credits — enough to generate 2 complete websites.</p>
        <Link
          href="/auth/signup"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          Get Started Free
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
