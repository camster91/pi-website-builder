import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
  typescript: true,
})

// Credit packages with pricing
export const CREDIT_PACKAGES = [
  { id: 'credits_1000', name: '1,000 Credits', credits: 1000, price: 10 }, // $10
  { id: 'credits_5000', name: '5,000 Credits', credits: 5000, price: 45 }, // $45 (10% discount)
  { id: 'credits_25000', name: '25,000 Credits', credits: 25000, price: 200 }, // $200 (20% discount)
]

export async function createCheckoutSession(userId: string, creditPackageId: string) {
  const packageInfo = CREDIT_PACKAGES.find(p => p.id === creditPackageId)
  if (!packageInfo) {
    throw new Error('Invalid credit package')
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: packageInfo.name,
            description: `${packageInfo.credits.toLocaleString()} Pi Credits`,
          },
          unit_amount: packageInfo.price * 100, // cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?canceled=true`,
    metadata: {
      userId,
      credits: packageInfo.credits.toString(),
    },
  })

  return session
}