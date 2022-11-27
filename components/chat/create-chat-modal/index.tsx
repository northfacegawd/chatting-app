import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useQueryClient } from 'react-query';

import SearchUser from '@components/common/search-user';
import useCreateChatRoom from '@hooks/requests/post/useCreateChatRoom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import {
  ErrorMessage,
  ModalContents,
  ModalTitle,
  ModalWrapper,
} from './index.style';

interface CreateChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateChatModal({
  open,
  onClose,
}: CreateChatModalProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedEmail, setSelectedEmail] = useState<string>('');
  const { isLoading, mutate, isError } = useCreateChatRoom(selectedEmail, {
    onSuccess: (chatRoom) => {
      queryClient.invalidateQueries(['chatRooms']);
      router.push(`/${chatRoom.id}`);
      onClose();
    },
  });

  const onSelect = useCallback((email: string) => {
    setSelectedEmail(email);
  }, []);

  return (
    <ModalWrapper open={open} onClose={onClose} style={{ padding: '' }}>
      <ModalContents>
        <ModalTitle>받는 사람의 이메일을 입력하세요</ModalTitle>
        <SearchUser onSelect={onSelect} />
        {isError && <ErrorMessage>채팅방 개설에 실패했습니다.</ErrorMessage>}
        <Box display="flex" marginTop="1em" columnGap="1em">
          <Button onClick={onClose} fullWidth variant="outlined">
            닫기
          </Button>
          <Button
            onClick={() => mutate()}
            disabled={!selectedEmail || isLoading}
            variant="contained"
            fullWidth
          >
            채팅방 만들기
          </Button>
        </Box>
      </ModalContents>
    </ModalWrapper>
  );
}
