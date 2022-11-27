import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id?.toString();
  const session = await getSession({ req });
  try {
    const chatRoom = await client.chatRoom.findFirst({
      where: {
        id,
      },
      select: {
        users: {
          take: 1,
          where: {
            email: {
              not: session?.user?.email,
            },
          },
        },
      },
    });
    return res.status(200).json({ ok: true, chatRoom });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['GET'], handler, authorization: true });
