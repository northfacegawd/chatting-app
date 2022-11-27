import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

import useChatConnect from '@hooks/requests/get/useChatConnect';
import useChatRoom from '@hooks/requests/get/useChatRoom';

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
  const { chats, onSendMesage } = useChatConnect(
    router.query.chatRoomId?.toString() ?? '',
  );
  const { data } = useChatRoom(router.query.chatRoomId?.toString() ?? '');

  const moveHome = () => router.push('/');

  return (
    <ChatContentsWrapper>
      <ChatRoomInfo>
        <BackButton onClick={moveHome} />
        {data && (
          <p>
            {data.users[0].name} ({data.users[0].email})
          </p>
        )}
      </ChatRoomInfo>
      <ChatsBox>
        {chats.map((chat) => (
          <ChatMessage key={chat.id} {...chat} />
        ))}
      </ChatsBox>
      <Write onSendMesage={onSendMesage} />
    </ChatContentsWrapper>
  );
}
