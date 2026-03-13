import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from './prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        // Fetch fresh credits from DB
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { credits: true },
        })
        session.user.credits = dbUser?.credits ?? 0
      }
      return session
    },
  },
  events: {
    async createUser({ user }) {
      // Give new users 100 free credits
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
