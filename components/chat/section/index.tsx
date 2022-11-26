import React, { useCallback, useState } from 'react';

import ChatList from '@components/chat/list';
import Add from '@mui/icons-material/Add';

import CreateChatModal from '../create-chat-modal';
import {
  ChatCount,
  ChatSectionHeader,
  ChatSectionWrapper,
  CreateChatButton,
} from './index.style';

export default function ChatSection() {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <ChatSectionWrapper>
        <ChatSectionHeader>
          <ChatCount>안 읽은 대화(2)</ChatCount>
          <CreateChatButton
            onClick={() => setOpen(true)}
            variant="contained"
            startIcon={<Add />}
          >
            새로운 메세지
          </CreateChatButton>
        </ChatSectionHeader>
        <ChatList />
      </ChatSectionWrapper>
      {open && <CreateChatModal open={open} onClose={onClose} />}
    </>
  );
}
