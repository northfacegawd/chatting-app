import React from 'react';

import ChatList from '@components/chat/list';
import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import {
  ChatCount,
  ChatSectionHeader,
  ChatSectionWrapper,
  CreateChatButton,
} from './index.style';

export default function ChatSection() {
  return (
    <ChatSectionWrapper>
      <ChatSectionHeader>
        <ChatCount>안 읽은 대화(2)</ChatCount>
        <CreateChatButton variant="contained" startIcon={<Add />}>
          새로운 메세지
        </CreateChatButton>
      </ChatSectionHeader>
      <ChatList />
    </ChatSectionWrapper>
  );
}
