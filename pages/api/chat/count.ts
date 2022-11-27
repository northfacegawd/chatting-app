import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  try {
    const chatRoomId = req.query.id?.toString();
    if (chatRoomId) {
      const unReadCount = await client.chat.count({
        where: {
          chatRoomId,
          AND: {
            user: {
              email: {
                not: session?.user?.email,
              },
            },
            ChatRoom: {
              exitDate: {
                lte: new Date(),
              },
            },
          },
        },
      });
      return res.status(200).json({ ok: true, unReadCount });
    }
    const unReadCount = await client.chatRoom.count({
      where: {
        exitDate: {
          lte: new Date(),
        },
        chats: {
          some: {
            AND: {
              user: {
                email: {
                  not: session?.user?.email,
                },
              },
            },
          },
        },
      },
    });
    return res.status(200).json({ ok: true, unReadCount });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['GET'], handler, authorization: true });
