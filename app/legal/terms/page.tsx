import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Pi Website Builder',
  description: 'Terms of Service for Pi Website Builder',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-gray">
      <h1>Terms of Service</h1>
      <p className="text-gray-500">Last updated: March 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using Pi Website Builder, you agree to be bound by these Terms of Service. If you do not agree to all terms, do not use our service.</p>

      <h2>2. Description of Service</h2>
      <p>Pi Website Builder is an AI-powered platform that generates websites based on user prompts. Credits are required to generate websites. Credits are non-refundable once consumed.</p>

      <h2>3. User Accounts</h2>
      <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account.</p>

      <h2>4. Credits & Payments</h2>
      <p>Credits are purchased in advance and deducted per use. All payments are processed by Stripe. Refunds are only available for unused credits and must be requested within 14 days of purchase.</p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to use the service to generate illegal, harmful, or offensive content. We reserve the right to suspend accounts that violate this policy.</p>

      <h2>6. Intellectual Property</h2>
      <p>You retain full ownership of the websites you generate. Pi Website Builder retains no rights to your generated content.</p>

      <h2>7. Limitation of Liability</h2>
      <p>Pi Website Builder is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our service.</p>

      <h2>8. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the new terms.</p>

      <h2>9. Contact</h2>
      <p>For questions about these Terms, contact us at <a href="mailto:cameron@ashbi.ca">cameron@ashbi.ca</a>.</p>
    </div>
  )
}
