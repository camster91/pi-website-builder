import Link from 'next/link'
import {
  Sparkles,
  Code,
  Globe,
  Download,
  Pin,
  Zap,
  Shield,
  Clock,
  Layers,
  ArrowRight,
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Multi-Agent AI Pipeline',
    description:
      'Three specialized Gemini AI agents work together: a Planner creates the site architecture, a Coder writes clean responsive code, and a QA agent reviews and improves everything.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Code,
    title: 'Clean Code Output',
    description:
      'Get semantic HTML5, modern CSS with Tailwind, and interactive JavaScript via Alpine.js. Your code is readable, accessible, and production-ready.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Globe,
    title: 'One-Click Deployment',
    description:
      'Deploy your website to a live subdomain instantly. Get a shareable URL with HTTPS, powered by Docker containers and automatic SSL via Let\'s Encrypt.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Download,
    title: 'ZIP Export',
    description:
      "Download all your website files as a clean ZIP archive. Take your code anywhere — host it yourself or hand it off to a client.",
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Pin,
    title: 'Pin-Based Feedback',
    description:
      'Click anywhere on the live preview to add a feedback pin. Comment on specific elements and track what needs attention — just like Figma for websites.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Zap,
    title: 'Fast Generation',
    description:
      'Most websites generate in under 60 seconds. The multi-model pipeline uses Gemini Flash for speed and Gemini Pro for quality where it matters.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Shield,
    title: 'SEO Optimized',
    description:
      'Every website includes proper meta tags, semantic markup, Open Graph tags, and structured data. Your clients\' sites will be search-engine-ready from day one.',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Clock,
    title: 'Credit-Based Pricing',
    description:
      'Pay only for what you use. Each generation costs 50 credits. Buy credits in bulk for volume discounts. No monthly fees or locked-in subscriptions.',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Layers,
    title: 'Full Project Management',
    description:
      'Organize your websites in a dashboard. View generation history, manage deployments, and track credit usage across all your projects.',
    color: 'bg-rose-100 text-rose-600',
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Build Websites with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Pi Website Builder is a complete platform for generating, deploying, and managing
            AI-powered websites at scale.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
          >
            Start Building Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-md transition"
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-5 ${feature.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Try It?</h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Sign up and get 100 free credits. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-xl hover:border-gray-400 hover:text-white transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
