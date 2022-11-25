import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import client from '@lib/server/prismadb';
import withHandler from '@lib/server/with-handler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.query.email?.toString();
  const session = await getSession({ req });
  try {
    if (!email?.trim()) return res.status(200).json({ ok: true, userList: [] });
    const userList = await client.user.findMany({
      where: {
        email: { contains: email },
        AND: {
          NOT: {
            email: session?.user?.email,
          },
        },
      },
    });
    return res.status(200).json({ ok: true, userList });
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
}

export default withHandler({ methods: ['GET'], handler, authorization: true });