import { useEffect, useState } from 'react';
import SocketIOCLient, { Socket } from 'socket.io-client';

import { ChatWithUser, MessageData } from '@models/chat';

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
    });

    setSocket((prev) => prev || mySocket);

    return () => {
      if (socket) socket.disconnect();
    };
  }, [id]);

  useEffect(() => {
    socket?.on('onReceive', (chat: ChatWithUser) => {
      setChats((prev) => prev.concat(chat));
    });
  }, [socket]);

  const onSendMessage = (messageData: MessageData) => {
    socket?.emit('onSend', { ...messageData, chatRoomId: id });
  };

  return { chats, onSendMessage };
};

export default useChatConnect;
