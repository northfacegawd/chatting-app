import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  try {
    const opponentEmail = req.body.email;
    if (!opponentEmail) throw new Error('invalid_email');
    const findChatRoom = await client.chatRoom.findFirst({
      where: {
        users: {
          some: {
            email: {
              in: [session?.user?.email, opponentEmail],
            },
          },
        },
      },
    });
    if (findChatRoom)
      return res.status(200).json({ ok: true, chatRoom: findChatRoom });

    const chatRoom = await client.chatRoom.create({
      data: {
        users: {
          connect: [
            { email: session?.user?.email ?? undefined },
            { email: opponentEmail },
          ],
        },
      },
    });
    return res.status(400).json({ ok: true, chatRoom });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['POST'], handler, authorization: true });
