import { NextApiResponseServerIO } from 'chat';
import { Server as NetServer } from 'http';
import { NextApiRequest } from 'next';
import { Server as ServerIO } from 'socket.io';

import client from '@lib/server/prismadb';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log('New Socket.io server...✅');

    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: '/api/chat/socketio',
    });

    io.on('connect', (socket) => {
      socket.on('onJoinRoom', (chatRoomId) => socket.join(chatRoomId));
      socket.on('onSend', async ({ email, chatRoomId, message }) => {
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
        socket.broadcast.to(chatRoomId).emit('onReceive', chat);
      });
    });

    res.socket.server.io = io;
  }

  res.end();
};
