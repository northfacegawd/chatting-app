import { useEffect, useState } from 'react';
import SocketIOCLient, { Socket } from 'socket.io-client';

import { ChatWithUser } from '@models/chat';

import useChats from './useChats';

const useChatConnect = (id: string) => {
  const { data } = useChats(id);
  const [chats, setChats] = useState<ChatWithUser[]>([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    setChats(data ?? []);
  }, [data]);

  useEffect(() => {
    if (!id) return;

    const mySocket = SocketIOCLient('http://localhost:3000', {
      path: '/api/chat/socketio',
    }).connect();

    mySocket.on('connect', () => {
      console.log('SOCKET CONNECTED!', mySocket.id);

      mySocket.emit('onJoinRoom', id);

      mySocket.on('onReceive', (chat: ChatWithUser) => {
        setChats((prev) => prev.concat(chat));
      });
    });

    setSocket((prev) => prev || mySocket);

    return () => {
      if (socket) socket.disconnect();
    };
  }, [id]);

  const onSendMessage = ({
    message,
    email,
  }: {
    message: string;
    email: string;
  }) => {
    socket?.emit('onSend', { message, email, chatRoomId: id });
  };

  return { chats, onSendMessage };
};

export default useChatConnect;
