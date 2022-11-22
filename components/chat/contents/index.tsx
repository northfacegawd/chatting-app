import React from 'react';

import ChatMessage from '../message';
import { ChatContentsWrapper } from './index.style';
import Write from './write';

export default function ChatContents() {
  return (
    <ChatContentsWrapper>
      <ChatMessage position="left" />
      <ChatMessage position="right" />
      <Write />
    </ChatContentsWrapper>
  );
}
