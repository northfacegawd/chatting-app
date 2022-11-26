import React, { useCallback, useState } from 'react';

import SearchUser from '@components/common/search-user';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import { ModalContents, ModalTitle, ModalWrapper } from './index.style';

interface CreateChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateChatModal({
  open,
  onClose,
}: CreateChatModalProps) {
  const [selectedEmail, setSelectedEmail] = useState<string>('');

  const onSelect = useCallback((email: string) => {
    setSelectedEmail(email);
  }, []);

  return (
    <ModalWrapper open={open} onClose={onClose} style={{ padding: '' }}>
      <ModalContents>
        <ModalTitle>받는 사람의 이메일을 입력하세요</ModalTitle>
        <SearchUser onSelect={onSelect} />
        <Box display="flex" marginTop="1em" columnGap="1em">
          <Button fullWidth variant="outlined">
            닫기
          </Button>
          <Button disabled={!selectedEmail} variant="contained" fullWidth>
            채팅방 만들기
          </Button>
        </Box>
      </ModalContents>
    </ModalWrapper>
  );
}
