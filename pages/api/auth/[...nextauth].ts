import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

import prisma from '@lib/server/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    KakaoProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
});
