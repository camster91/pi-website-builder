import { Suspense } from 'react'
import SignInForm from './SignInForm'

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-pulse h-10 w-48 bg-gray-200 rounded" />
        </div>
      }
    >
      <SignInForm />
    </Suspense>
  )
}
