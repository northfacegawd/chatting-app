import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SocketIOCLient from 'socket.io-client';

import { Chat } from '@prisma/client';

import ChatMessage from '../message';
import {
  BackButton,
  ChatContentsWrapper,
  ChatRoomInfo,
  ChatsBox,
} from './index.style';
import Write from './write';

export default function ChatContents() {
  const [chats, setChats] = useState<Chat[]>([]);
  const router = useRouter();

  const moveHome = () => router.push('/');

  useEffect((): any => {
    const socket = SocketIOCLient('http://localhost:3000', {
      path: '/api/chat/socketio',
    }).connect();

    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id);
    });

    socket.on('message', (chat: Chat) => {
      setChats((prev) => prev.concat(chat));
    });

    if (socket) return () => socket.disconnect();
  }, []);

  return (
    <ChatContentsWrapper>
      <ChatRoomInfo>
        <BackButton onClick={moveHome} />
        <p>최예슬(chuck5732590@gmail.com)</p>
      </ChatRoomInfo>
      <ChatsBox>
        {chats.map((chat) => (
          <React.Fragment key={chat.id}>{JSON.stringify(chat)}</React.Fragment>
        ))}
        {/* <ChatMessage position="left" />
        <ChatMessage position="right" /> */}
      </ChatsBox>
      <Write />
    </ChatContentsWrapper>
  );
}
