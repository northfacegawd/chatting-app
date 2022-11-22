import React from 'react';

import ChatList from '@components/chat/list';
import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import { ChatSectionHeader } from './index.style';

export default function ChatSection() {
  return (
    <section>
      <ChatSectionHeader>
        안 읽은 대화(2)
        <Button variant="contained" startIcon={<Add />}>
          새로운 메세지
        </Button>
      </ChatSectionHeader>
      <ChatList />
    </section>
  );
}
