import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  try {
    const chatList = await client.chatRoom.findMany({
      where: {
        users: {
          some: {
            email: session?.user?.email,
          },
        },
      },
    });
    return res.status(200).json({ ok: true, chatList });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['GET'], handler, authorization: true });
