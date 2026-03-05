import { ArrowRight, Sparkles, Zap, Shield, Code, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Build <span className="text-blue-600">AI-Powered Websites</span> in Minutes
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Pi Website Builder turns your ideas into beautiful, functional websites using Gemini AI.
          No coding required. Just describe what you need and watch it come to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How Pi Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1. Describe Your Vision</h3>
            <p className="text-gray-600">
              Tell our AI what kind of website you need. &quot;A plumbing site for Toronto with booking system&quot; or &quot;An online portfolio for a photographer&quot;.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
              <Code className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">2. AI Generates Code</h3>
            <p className="text-gray-600">
              Our multi-agent pipeline plans, codes, and reviews your website. You get clean HTML, CSS, and JavaScript with Tailwind and Alpine.js.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">3. Deploy Instantly</h3>
            <p className="text-gray-600">
              One-click deployment to your own subdomain. Edit visually with pin‑based feedback. Export clean code anytime.
            </p>
          </div>
        </div>
      </section>

      {/* AI Pipeline */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Multi‑Agent AI Pipeline</h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We use specialized Gemini models for each task—saving costs while delivering higher quality.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Planner</h3>
              <p className="text-gray-300">Gemini Pro analyzes your prompt and creates a detailed JSON plan.</p>
            </div>
            <div className="hidden md:block text-2xl text-gray-400">→</div>
            <div className="text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Coder</h3>
              <p className="text-gray-300">Gemini Flash rapidly writes clean, responsive HTML/CSS/JS.</p>
            </div>
            <div className="hidden md:block text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">QA & Marketer</h3>
              <p className="text-gray-300">Gemini Pro reviews code, improves copy, and ensures quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Join hundreds of creators who are building websites faster than ever before.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-10 py-4 text-xl font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition"
        >
          Start Building Free
          <Zap className="ml-3 h-6 w-6" />
        </Link>
        <p className="mt-6 text-gray-500">No credit card required. 100 free credits on signup.</p>
      </section>
    </div>
  )
}