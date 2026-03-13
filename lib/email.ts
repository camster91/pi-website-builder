const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || ''
const MAILGUN_DOMAIN  = process.env.MAILGUN_DOMAIN  || 'ashbi.ca'
const FROM_ADDRESS    = process.env.MAIL_FROM       || 'Pi Website Builder <noreply@ashbi.ca>'

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  if (!MAILGUN_API_KEY) {
    console.warn('MAILGUN_API_KEY not set, skipping email')
    return
  }

  const form = new URLSearchParams()
  form.append('from',    FROM_ADDRESS)
  form.append('to',      to)
  form.append('subject', subject)
  form.append('html',    html)

  const res = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form.toString(),
  })

  if (!res.ok) {
    console.error('Mailgun error:', await res.text())
  }
}

export function projectReadyEmail(userEmail: string, projectName: string, projectId: string) {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/projects/${projectId}`
  return sendEmail({
    to: userEmail,
    subject: `✅ Your website "${projectName}" is ready!`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9fafb;border-radius:12px;">
        <h1 style="color:#1d4ed8;font-size:24px;margin-bottom:8px;">Your website is ready! 🎉</h1>
        <p style="color:#374151;font-size:16px;">Your AI-generated website <strong>"${projectName}"</strong> has been built and is ready to preview.</p>
        <a href="${url}" style="display:inline-block;margin-top:24px;padding:12px 24px;background:#2563eb;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          View Your Website →
        </a>
        <p style="color:#9ca3af;font-size:12px;margin-top:32px;">Pi Website Builder · <a href="${process.env.NEXT_PUBLIC_APP_URL}/legal/privacy" style="color:#9ca3af;">Privacy Policy</a></p>
      </div>
    `,
  })
}
