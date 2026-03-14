import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,

  // CredentialsProvider requires JWT strategy — database sessions
  // are incompatible with credentials-based auth in NextAuth.
  session: { strategy: 'jwt' },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'placeholder',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        // Allowlist check — set ALLOWED_EMAILS as comma-separated env var
        const allowedRaw = process.env.ALLOWED_EMAILS
        if (allowedRaw) {
          const allowed = allowedRaw.split(',').map(e => e.trim().toLowerCase())
          if (!allowed.includes(credentials.email.toLowerCase())) return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return { id: user.id, email: user.email, name: user.name ?? undefined }
      },
    }),
  ],

  callbacks: {
    // Embed user id into the JWT on sign-in
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    // Pull fresh credits from DB on every session call
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string

        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: { credits: true },
        })
        session.user.credits = dbUser?.credits ?? 0
      }
      return session
    },
  },

  events: {
    async createUser({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { credits: 100 },
      })
      await prisma.tokenTransaction.create({
        data: {
          userId: user.id,
          amount: 100,
          type: 'BONUS',
          metadata: { reason: 'New user welcome credits' },
        },
      })
    },
  },

  pages: {
    signIn: '/auth/signin',
    newUser: '/dashboard',
  },
}
