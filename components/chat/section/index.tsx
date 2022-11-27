import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import ChatList from '@components/chat/list';
import useChatRooms from '@hooks/useChatRooms';
import useUnReadCount from '@hooks/useUnReadCount';
import Add from '@mui/icons-material/Add';

import CreateChatModal from '../create-chat-modal';
import {
  ChatCount,
  ChatSectionHeader,
  ChatSectionWrapper,
  CreateChatButton,
} from './index.style';

export default function ChatSection() {
  const { data } = useUnReadCount();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <ChatSectionWrapper home={router.pathname === '/'}>
        <ChatSectionHeader>
          <ChatCount>안 읽은 대화({data})</ChatCount>
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
