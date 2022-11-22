import React from 'react';

import { ChatContentsWrapper } from './index.style';
import Write from './write';

export default function ChatContents() {
  return (
    <ChatContentsWrapper>
      <Write />
    </ChatContentsWrapper>
  );
}
