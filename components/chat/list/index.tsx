import React from 'react';

import ChatItem from '@components/chat';

import { ChatListWrapper } from './index.style';

export default function ChatList() {
  return (
    <ChatListWrapper>
      {Array.from({ length: 10 }).map((_, i) => (
        <ChatItem key={(i + 1).toString()} />
      ))}
    </ChatListWrapper>
  );
}
