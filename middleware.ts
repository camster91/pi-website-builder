// Note: Next.js 16 uses "proxy.ts" but next-auth v4 middleware still works via this file.
// This will show a deprecation warning but remains functional.
// Migration to next-auth v5 / proxy.ts is recommended for production.
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth/signin',
  },
})

export const config = {
  matcher: ['/dashboard/:path*', '/api/generate', '/api/billing/:path*', '/api/projects/:path*'],
}
