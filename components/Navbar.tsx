'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown, CreditCard, LayoutDashboard, LogOut } from 'lucide-react'

export default function Navbar() {
  const { data: session } = useSession()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Nav links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-blue-600 flex-shrink-0">
            Pi Website Builder
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition">
              Pricing
            </Link>
            {session && (
              <Link
                href="/dashboard"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {session ? (
            <>
              {/* Credits badge */}
              <Link
                href="/dashboard/billing"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition"
              >
                <CreditCard className="h-3.5 w-3.5" />
                {(session.user?.credits ?? 0).toLocaleString()} credits
              </Link>

              {/* User dropdown */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                      {(session.user?.name || session.user?.email || 'U')[0].toUpperCase()}
                    </div>
                  )}
                  <span className="hidden sm:block text-sm text-gray-700 max-w-[120px] truncate">
                    {session.user?.name || session.user?.email}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                </button>

                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white border rounded-xl shadow-lg z-20 py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <LayoutDashboard className="h-4 w-4 text-gray-400" />
                        Dashboard
                      </Link>
                      <Link
                        href="/dashboard/billing"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <CreditCard className="h-4 w-4 text-gray-400" />
                        Billing & Credits
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={() => {
                          setDropdownOpen(false)
                          signOut({ callbackUrl: '/' })
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/auth/signin" className="text-sm text-gray-600 hover:text-gray-900 transition font-medium">
                Sign In
              </Link>
              <Link href="/auth/signup" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white py-2">
          <div className="container mx-auto px-4 space-y-1">
            <Link
              href="/features"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700"
            >
              Pricing
            </Link>
            {session && (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/billing"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  Billing
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
