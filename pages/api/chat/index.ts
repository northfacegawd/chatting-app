import { NextApiRequest, NextApiResponse } from 'next';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const chatRoomId = req.query.id?.toString();
    const chats = await client.chat.findMany({
      where: {
        chatRoomId,
      },
      include: {
        user: true,
      },
      take: 50,
    });
    res.status(200).json({ ok: true, chats });
  } catch (error) {
    res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['GET'], handler, authorization: true });
