import Link from 'next/link'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for trying out Pi',
    credits: 100,
    features: [
      '100 free credits on signup',
      '2 websites included',
      'ZIP download',
      'Preview in browser',
      'Community support',
    ],
    cta: 'Get Started Free',
    href: '/auth/signin',
    highlight: false,
  },
  {
    name: 'Creator',
    price: 10,
    description: 'For individuals building multiple sites',
    credits: 1000,
    features: [
      '1,000 credits ($10)',
      '20 websites',
      'ZIP download',
      'Live deployment to subdomain',
      'Pin-based feedback',
      'Email support',
    ],
    cta: 'Buy Credits',
    href: '/dashboard/billing',
    highlight: true,
  },
  {
    name: 'Agency',
    price: 45,
    description: 'For agencies and power users',
    credits: 5000,
    features: [
      '5,000 credits ($45)',
      '100 websites',
      'Everything in Creator',
      'Priority generation queue',
      'Custom domain support',
      'Priority support',
    ],
    cta: 'Buy Credits',
    href: '/dashboard/billing',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Buy credits, generate websites. Each website generation costs just 50 credits. No
            subscriptions, no lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl border shadow-sm p-8 relative ${
                plan.highlight ? 'border-blue-400 shadow-blue-100 shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                <p className="text-gray-500 mt-1 text-sm">{plan.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.price > 0 && (
                    <span className="text-gray-500 text-sm">one-time</span>
                  )}
                </div>
                {plan.price === 0 && (
                  <p className="text-sm text-gray-500 mt-1">Free forever</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full flex items-center justify-center py-3 px-6 rounded-xl font-medium transition ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
                {plan.highlight && <Zap className="ml-2 h-4 w-4" />}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-500">
          <p className="text-sm">
            All credits are used at 50 credits per website generation.{' '}
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              Start building now →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
