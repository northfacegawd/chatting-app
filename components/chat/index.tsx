import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import useUnReadCount from '@hooks/requests/get/useUnReadCount';
import useChatRoomInfo from '@hooks/useChatInfo';
import { ChatRoomWithUser } from '@models/chat';

import {
  BorderAvatar,
  ChatItemWrapper,
  MessageInfo,
  Name,
  Time,
} from './index.style';

export default function ChatItem(props: ChatRoomWithUser) {
  const { id, users } = props;
  const { data: count } = useUnReadCount(id);
  const { date, lastMessage, name } = useChatRoomInfo(props);

  const router = useRouter();

  return (
    <Link href={`/${id}`}>
      <ChatItemWrapper active={id === router.query?.chatRoomId}>
        <BorderAvatar alt="Default" src={users[0].image ?? undefined} />
        <MessageInfo>
          <Name>
            {name} {count && count > 0 && `(${count})`}
          </Name>
          {date && <Time>{date}</Time>}
          <br />
          {lastMessage ?? '채팅 내역이 존재하지 않습니다.'}
        </MessageInfo>
      </ChatItemWrapper>
    </Link>
  );
}
