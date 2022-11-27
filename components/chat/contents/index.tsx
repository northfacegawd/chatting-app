import { useRouter } from 'next/router';
import React from 'react';

import useChatConnect from '@hooks/useChatConnect';
import useChats from '@hooks/useChats';

import ChatMessage from '../message';
import {
  BackButton,
  ChatContentsWrapper,
  ChatRoomInfo,
  ChatsBox,
} from './index.style';
import Write from './write';

export default function ChatContents() {
  const router = useRouter();
  const { data } = useChats(router.query.chatRoomId?.toString() ?? '');
  const { chats } = useChatConnect(data);

  const moveHome = () => router.push('/');

  return (
    <ChatContentsWrapper>
      <ChatRoomInfo>
        <BackButton onClick={moveHome} />
        <p>최예슬(chuck5732590@gmail.com)</p>
      </ChatRoomInfo>
      <ChatsBox>
        {chats.map((chat) => (
          <ChatMessage key={chat.id} {...chat} />
        ))}
      </ChatsBox>
      <Write />
    </ChatContentsWrapper>
  );
}
