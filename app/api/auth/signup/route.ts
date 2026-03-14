import { NextResponse } from 'next/server'

// Signups are disabled — accounts are provisioned manually.
export async function POST() {
  return NextResponse.json(
    { error: 'New accounts are currently by invitation only.' },
    { status: 403 }
  )
}
