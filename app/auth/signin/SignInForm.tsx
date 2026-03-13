'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Chrome } from 'lucide-react'
import Link from 'next/link'

export default function SignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = await signIn('credentials', {
      email,
      password,
      callbackUrl,
      redirect: true,
    })
    if (result?.error) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Pi Website Builder</h1>
          <h2 className="mt-3 text-xl font-semibold text-gray-700">Sign in to your account</h2>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-8">
          <form onSubmit={handleCredentialsSignIn} className="space-y-4">
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold">Sign In</button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or</span></div>
          </div>

          <button
            onClick={() => signIn('google', { callbackUrl })}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm"
          >
            <Chrome className="h-5 w-5 text-blue-500" />
            Continue with Google
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <Link href="/auth/signup" className="text-blue-600 font-semibold">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
