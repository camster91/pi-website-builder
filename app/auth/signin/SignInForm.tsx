'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Chrome } from 'lucide-react'

export default function SignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Pi Website Builder</h1>
          <h2 className="mt-3 text-xl font-semibold text-gray-700">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-500">
            Start creating AI-powered websites in minutes
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-8">
          <button
            onClick={() => signIn('google', { callbackUrl })}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm"
          >
            <Chrome className="h-5 w-5 text-blue-500" />
            Continue with Google
          </button>

          <p className="mt-6 text-center text-xs text-gray-400">
            By signing in, you agree to our Terms of Service and Privacy Policy.
            <br />
            New users get <strong>100 free credits</strong> to get started.
          </p>
        </div>
      </div>
    </div>
  )
}
