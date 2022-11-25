import React from 'react';

import Avatar from '@mui/material/Avatar';

import {
  ChatAvatar,
  Message,
  MessageInfo,
  MessageWrapper,
  Name,
} from './index.style';

interface ChatMessageProps {
  position: 'left' | 'right';
}

export default function ChatMessage({ position }: ChatMessageProps) {
  return (
    <MessageWrapper position={position}>
      <ChatAvatar />
      <MessageInfo position={position}>
        <Name position={position}>최예슬</Name>
        <Message
          dangerouslySetInnerHTML={{
            __html:
              '안녕하세요 서류지원 합격한 최예슬 입니다.\n우선 좋은소식 감사드립니다.\n제안 주신 일시에 면접이 가능하므로 그 때 뵙겠습니다.    - <time>오후 4:00</time>',
          }}
        />
      </MessageInfo>
    </MessageWrapper>
  );
}
