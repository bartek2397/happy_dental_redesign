import bcrypt from 'bcrypt'
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import type { Adapter } from "next-auth/adapters";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

function MyAdapter(): Adapter {
    return PrismaClient(prisma)
}

export const authOptions: NextAuthOptions = {
    adapter: MyAdapter(),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'text'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials')
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )
                ;
                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials')
                }

                return user
            }
        })
    ],
    pages: {
        signIn: '/',
      },
      debug: process.env.NODE_ENV === 'development',
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)