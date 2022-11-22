import React from 'react';

import Avatar from '@mui/material/Avatar';
import avatar from '@public/images/avatar.svg';

import {
  BorderAvatar,
  ChatItemWrapper,
  MessageInfo,
  Name,
  Time,
} from './index.style';

export default function ChatItem() {
  return (
    <ChatItemWrapper>
      <BorderAvatar alt="Default" src={avatar} />
      <MessageInfo>
        <Name>최예슬</Name>
        <Time dateTime="2016-12-13">2016.12.13</Time>
        <br />
        안녕하세요 서류지원 합격한 최예슬 입니다. 우선 좋은소식 감사드립니다
      </MessageInfo>
    </ChatItemWrapper>
  );
}
