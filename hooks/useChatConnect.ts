import { useEffect, useState } from 'react';
import SocketIOCLient from 'socket.io-client';

import { ChatWithUser } from '@models/chat';

const useChatConnect = () => {
  const [chats, setChats] = useState<ChatWithUser[]>([]);

  useEffect(() => {
    const socket = SocketIOCLient('http://localhost:3000', {
      path: '/api/chat/socketio',
    }).connect();

    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id);
    });

    socket.on('chat', (chat: ChatWithUser) => {
      setChats((prev) => prev.concat(chat));
    });

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  return { chats };
};

export default useChatConnect;
