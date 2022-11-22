import React from 'react';

import ChatItem from '@components/chat';

export default function ChatList() {
  return (
    <ul>
      {Array.from({ length: 10 }).map((_, i) => (
        <ChatItem key={(i + 1).toString()} />
      ))}
    </ul>
  );
}
