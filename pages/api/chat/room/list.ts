import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  try {
    const chatRooms = await client.chatRoom.findMany({
      where: {
        users: {
          some: {
            email: session?.user?.email,
          },
        },
      },
      select: {
        id: true,
        chats: {
          take: 1,
          orderBy: {
            createAt: 'desc',
          },
        },
        users: {
          where: {
            email: {
              not: session?.user?.email,
            },
          },
          select: {
            image: true,
            name: true,
            email: true,
          },
        },
      },
    });
    return res.status(200).json({ ok: true, chatRooms });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['GET'], handler, authorization: true });
