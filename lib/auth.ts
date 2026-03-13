import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
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

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
        
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
