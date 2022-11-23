import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import prisma from '@lib/server/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});