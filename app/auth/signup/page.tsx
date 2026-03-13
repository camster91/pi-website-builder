'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      router.push('/auth/signin')
    } else {
      const data = await res.json()
      setError(data.error || 'Failed to sign up')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 mb-6 border rounded" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sign Up</button>
        <p className="mt-4 text-sm text-center">Already have an account? <Link href="/auth/signin" className="text-blue-600">Sign In</Link></p>
      </form>
    </div>
  )
}
