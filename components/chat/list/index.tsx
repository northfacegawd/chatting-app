import React from 'react';

import ChatItem from '@components/chat';
import useChatList from '@hooks/useChatList';

import { ChatListWrapper } from './index.style';

export default function ChatList() {
  const { data } = useChatList();

  return (
    <ChatListWrapper>
      {data?.map((_, i) => (
        <ChatItem key={(i + 1).toString()} />
      ))}
    </ChatListWrapper>
  );
}
