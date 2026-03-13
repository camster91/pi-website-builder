import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { stripe, CREDIT_PACKAGES } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { packageId } = await req.json()
  const pkg = CREDIT_PACKAGES.find((p) => p.id === packageId)
  if (!pkg) {
    return NextResponse.json({ error: 'Invalid package' }, { status: 400 })
  }

  // Get or create Stripe customer
  let stripeCustomerId: string | null = null
  const sub = await prisma.subscription.findUnique({
    where: { userId: session.user.id },
  })
  stripeCustomerId = sub?.stripeCustomerId || null

  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: session.user.email!,
      name: session.user.name || undefined,
      metadata: { userId: session.user.id },
    })
    stripeCustomerId = customer.id

    // Save customer ID
    await prisma.subscription.upsert({
      where: { userId: session.user.id },
      update: { stripeCustomerId },
      create: { userId: session.user.id, stripeCustomerId },
    })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: pkg.name,
            description: `${pkg.credits.toLocaleString()} Pi Website Builder Credits`,
          },
          unit_amount: pkg.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing?canceled=true`,
    metadata: {
      userId: session.user.id,
      credits: pkg.credits.toString(),
      packageId: pkg.id,
    },
  })

  return NextResponse.json({ url: checkoutSession.url })
}
