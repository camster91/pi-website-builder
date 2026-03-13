import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err: any) {
    console.error('Webhook signature error:', err.message)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const { userId, credits } = session.metadata || {}

        if (!userId || !credits) break

        const creditAmount = parseInt(credits, 10)
        if (isNaN(creditAmount)) break

        await prisma.user.update({
          where: { id: userId },
          data: { credits: { increment: creditAmount } },
        })

        await prisma.tokenTransaction.create({
          data: {
            userId,
            amount: creditAmount,
            type: 'PURCHASE',
            metadata: {
              stripeSessionId: session.id,
              amountPaid: session.amount_total,
            },
          },
        })

        console.log(`Added ${creditAmount} credits to user ${userId}`)
        break
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const sub = await prisma.subscription.findUnique({
          where: { stripeSubscriptionId: subscription.id },
        })

        if (sub) {
          const periodEnd = (subscription as any).current_period_end
          await prisma.subscription.update({
            where: { id: sub.id },
            data: {
              status:
                subscription.status === 'active'
                  ? 'ACTIVE'
                  : subscription.status === 'canceled'
                  ? 'CANCELED'
                  : subscription.status === 'past_due'
                  ? 'PAST_DUE'
                  : 'INACTIVE',
              ...(periodEnd ? { currentPeriodEnd: new Date(periodEnd * 1000) } : {}),
            },
          })
        }
        break
      }
    }
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
