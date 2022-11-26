import { useRouter } from 'next/router';
import React from 'react';

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

  const moveHome = () => router.push('/');

  return (
    <ChatContentsWrapper>
      <ChatRoomInfo>
        <BackButton onClick={moveHome} />
        <p>최예슬(chuck5732590@gmail.com)</p>
      </ChatRoomInfo>
      <ChatsBox>
        <ChatMessage position="left" />
        <ChatMessage position="right" />
      </ChatsBox>
      <Write />
    </ChatContentsWrapper>
  );
}
