import React from 'react';

import { ChatWithUser } from '@models/chat';

import {
  ChatAvatar,
  Message,
  MessageInfo,
  MessageWrapper,
  Name,
} from './index.style';

interface ChatMessageProps extends ChatWithUser {}

export default function ChatMessage({ user, message }: ChatMessageProps) {
  return (
    <MessageWrapper>
      <ChatAvatar src={user?.image ?? undefined} />
      <MessageInfo>
        <Name>{user?.name}</Name>
        <Message
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      </MessageInfo>
    </MessageWrapper>
  );
}
