import Link from 'next/link';
import React from 'react';

import useChatRoomInfo from '@hooks/useChatInfo';
import { ChatRoomWithUser } from '@requests/chat';

import {
  BorderAvatar,
  ChatItemWrapper,
  MessageInfo,
  Name,
  Time,
} from './index.style';

interface ChatItemProps extends ChatRoomWithUser {}

export default function ChatItem(props: ChatRoomWithUser) {
  const { id } = props;
  const { date, lastMessage, name, unReadMessage } = useChatRoomInfo(props);

  return (
    <Link href={`/${id}`}>
      <ChatItemWrapper>
        <BorderAvatar alt="Default" src="/images/avatar.svg" />
        <MessageInfo>
          <Name>{name}</Name>
          {date && <Time>{date}</Time>}
          <br />
          {lastMessage ?? '채팅 내역이 존재하지 않습니다.'}
        </MessageInfo>
      </ChatItemWrapper>
    </Link>
  );
}
