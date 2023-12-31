import bcrypt from 'bcrypt'
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Provider } from 'next-auth/providers';

const prisma = new PrismaClient()



export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code",
                },
              },
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
    ] as Provider[],
    pages: {
        signIn: '/',
      },
      debug: process.env.NODE_ENV === 'development',
      session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
      },
      secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)