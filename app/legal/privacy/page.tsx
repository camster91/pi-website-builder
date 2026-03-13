import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Pi Website Builder',
  description: 'Privacy Policy for Pi Website Builder',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-gray">
      <h1>Privacy Policy</h1>
      <p className="text-gray-500">Last updated: March 2026</p>

      <h2>1. Information We Collect</h2>
      <p>We collect your email address, name (optional), and usage data (prompts, credits, generated files) to operate the service.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and improve the service.</li>
        <li>To process payments via Stripe.</li>
        <li>To send transactional emails (e.g. project ready notifications) via Mailgun.</li>
      </ul>

      <h2>3. Data Storage</h2>
      <p>Your data is stored on secure servers. Generated websites and files are stored in our PostgreSQL database. Passwords are hashed using bcrypt and never stored in plain text.</p>

      <h2>4. Third-Party Services</h2>
      <ul>
        <li><strong>Stripe</strong> — payment processing.</li>
        <li><strong>Google Gemini</strong> — AI website generation.</li>
        <li><strong>Mailgun</strong> — transactional email.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>We retain your data for as long as your account is active. You can request deletion of your account and all associated data at any time by emailing us.</p>

      <h2>6. Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:cameron@ashbi.ca">cameron@ashbi.ca</a> to exercise these rights.</p>

      <h2>7. Cookies</h2>
      <p>We use only essential session cookies (via NextAuth.js) required to keep you signed in. We do not use advertising or tracking cookies.</p>

      <h2>8. Contact</h2>
      <p>For privacy questions, contact <a href="mailto:cameron@ashbi.ca">cameron@ashbi.ca</a>.</p>
    </div>
  )
}
