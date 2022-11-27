import { useRouter } from 'next/router';
import React from 'react';

import useChatConnect from '@hooks/useChatConnect';

import {
  BackButton,
  ChatContentsWrapper,
  ChatRoomInfo,
  ChatsBox,
} from './index.style';
import Write from './write';

export default function ChatContents() {
  const router = useRouter();
  const { chats } = useChatConnect();

  const moveHome = () => router.push('/');

  return (
    <ChatContentsWrapper>
      <ChatRoomInfo>
        <BackButton onClick={moveHome} />
        <p>최예슬(chuck5732590@gmail.com)</p>
      </ChatRoomInfo>
      <ChatsBox>
        {chats.map((chat) => (
          <React.Fragment key={chat.message}>
            {JSON.stringify(chat)}
          </React.Fragment>
        ))}
        {/* <ChatMessage position="left" />
        <ChatMessage position="right" /> */}
      </ChatsBox>
      <Write />
    </ChatContentsWrapper>
  );
}
