import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { CreditCard, DollarSign, Package, TrendingUp } from 'lucide-react'

export default async function BillingPage() {
  const session = await getServerSession(authOptions)
  if (!session) return null

  const user = await prisma.user.findUnique({
    where: { email: session.user?.email! },
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
    { id: 'credits_1000', name: '1,000 Credits', credits: 1000, price: 10 },
    { id: 'credits_5000', name: '5,000 Credits', credits: 5000, price: 45 },
    { id: 'credits_10000', name: '10,000 Credits', credits: 10000, price: 80 },
    { id: 'credits_50000', name: '50,000 Credits', credits: 50000, price: 350 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Billing & Credits</h1>
        <p className="text-gray-600 mt-2">Manage your credits and subscription</p>
      </div>

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
        </div>
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Plan</p>
              <p className="text-3xl font-bold text-gray-900">
                {user.subscription?.plan || 'Starter'}
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
              <p className="text-sm text-gray-500">Monthly Cost</p>
              <p className="text-3xl font-bold text-gray-900">
                ${user.subscription?.plan === 'PRO' ? 49 : user.subscription?.plan === 'AGENCY' ? 199 : 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Credit Packages */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Buy Credits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {creditPackages.map((pkg) => (
              <div key={pkg.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-500">${pkg.price} one-time</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${pkg.price}</div>
                    <div className="text-sm text-gray-500">${(pkg.price / pkg.credits * 1000).toFixed(2)}/1k credits</div>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {user.tokenTransactions.length > 0 ? (
              user.tokenTransactions.map((tx) => (
                <div key={tx.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">{tx.type.replace('_', ' ')}</p>
                    <p className="text-sm text-gray-500">{new Date(tx.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className={`text-lg font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} credits
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CreditCard className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p>No transactions yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}