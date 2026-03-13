import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreditCard, DollarSign, Package, TrendingUp, CheckCircle, XCircle } from 'lucide-react'
import BillingButtons from './BillingButtons'

export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; canceled?: string }>
}) {
  const params = await searchParams
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) return null

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      subscription: true,
      tokenTransactions: {
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
    },
  })

  if (!user) return null

  const creditPackages = [
    { id: 'credits_1000', name: '1,000 Credits', credits: 1000, price: 10, popular: false },
    { id: 'credits_5000', name: '5,000 Credits', credits: 5000, price: 45, popular: true },
    { id: 'credits_10000', name: '10,000 Credits', credits: 10000, price: 80, popular: false },
    { id: 'credits_50000', name: '50,000 Credits', credits: 50000, price: 350, popular: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Billing & Credits</h1>
        <p className="text-gray-600 mt-2">Manage your credits and transaction history</p>
      </div>

      {/* Success / Canceled banners */}
      {params.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-medium text-green-800">Payment successful!</p>
            <p className="text-sm text-green-700">Credits have been added to your account.</p>
          </div>
        </div>
      )}
      {params.canceled && (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center gap-3">
          <XCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
          <p className="text-gray-600">Payment canceled. No charges were made.</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Available Credits</p>
              <p className="text-3xl font-bold text-gray-900">{user.credits.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">≈ {Math.floor(user.credits / 50)} websites remaining</p>
        </div>
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Plan</p>
              <p className="text-3xl font-bold text-gray-900 capitalize">
                {(user.subscription?.plan || 'STARTER').toLowerCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Purchased</p>
              <p className="text-3xl font-bold text-gray-900">
                {user.tokenTransactions
                  .filter((t) => t.amount > 0)
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">All-time credits</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Credit Packages */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Buy Credits</h2>
          <p className="text-sm text-gray-500 mb-6">Each website generation costs 50 credits</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`border rounded-xl p-4 relative transition-all ${
                  pkg.popular
                    ? 'border-blue-400 shadow-md'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                    BEST VALUE
                  </div>
                )}
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mt-1">${pkg.price}</div>
                  <p className="text-xs text-gray-500">
                    ${((pkg.price / pkg.credits) * 1000).toFixed(2)} / 1k credits
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ≈ {Math.floor(pkg.credits / 50)} websites
                  </p>
                </div>
                <BillingButtons packageId={pkg.id} />
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Transaction History</h2>
          <div className="space-y-3">
            {user.tokenTransactions.length > 0 ? (
              user.tokenTransactions.map((tx) => {
                return (
                  <div
                    key={tx.id}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {tx.type.replace('_', ' ')}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(tx.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div
                      className={`text-base font-bold ${
                        tx.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {tx.amount > 0 ? '+' : ''}
                      {tx.amount.toLocaleString()}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CreditCard className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p className="text-sm">No transactions yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
