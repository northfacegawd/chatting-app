import { NextApiResponseServerIO } from 'chat';
import { NextApiRequest } from 'next';

import client from '@lib/server/prismadb';

async function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (req.method === 'POST') {
    try {
      const { email, message, chatRoomId } = req.body;
      const chat = await client.chat.create({
        data: {
          message,
          ChatRoom: {
            connect: {
              id: chatRoomId,
            },
          },
          user: {
            connect: {
              email,
            },
          },
        },
        include: { user: true },
      });
      res.socket.server.io.emit('chat', chat);
      res.status(200).json({ ok: true, chat });
    } catch (error) {
      res.status(400).json({ ok: false, error });
    }
  }
  if (req.method === 'GET') {
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
}

export default handler;
