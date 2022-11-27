import { useEffect, useState } from 'react';
import SocketIOCLient from 'socket.io-client';

import { Chat } from '@prisma/client';

const useChatConnect = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const socket = SocketIOCLient('http://localhost:3000', {
      path: '/api/chat/socketio',
    }).connect();

    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id);
    });

    socket.on('chat', (chat: Chat) => {
      setChats((prev) => prev.concat(chat));
    });

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  return { chats };
};

export default useChatConnect;
