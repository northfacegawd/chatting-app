import React from 'react';

import {
  BorderAvatar,
  ChatItemWrapper,
  MessageInfo,
  Name,
  Time,
} from './index.style';

interface ChatItemProps {
  userName: string;
  lastMessage: string;
  date: Date;
}

export default function ChatItem({
  date,
  lastMessage,
  userName,
}: ChatItemProps) {
  return (
    <ChatItemWrapper>
      <BorderAvatar alt="Default" src="/images/avatar.svg" />
      <MessageInfo>
        <Name>{userName}</Name>
        <Time dateTime="2016-12-13">{date?.toISOString?.()}</Time>
        <br />
        {lastMessage}
      </MessageInfo>
    </ChatItemWrapper>
  );
}
