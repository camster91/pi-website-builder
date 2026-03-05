'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Chrome } from 'lucide-react'

export default function SignInPage() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Pi Website Builder
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Start creating AI-powered websites in minutes
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <button
              onClick={() => signIn('google', { callbackUrl })}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Chrome className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
              </span>
              Sign in with Google
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  )
}