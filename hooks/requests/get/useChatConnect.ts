import { useEffect, useState } from 'react';
import SocketIOCLient from 'socket.io-client';

import { ChatWithUser } from '@models/chat';

import useChats from './useChats';

const useChatConnect = (id: string) => {
  const { data } = useChats(id);
  const [chats, setChats] = useState<ChatWithUser[]>([]);

  useEffect(() => {
    setChats(data ?? []);

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
  }, [data]);

  return { chats };
};

export default useChatConnect;
