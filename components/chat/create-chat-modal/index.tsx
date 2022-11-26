import React, { use, useEffect, useState } from 'react';

import useUserList from '@hooks/useUserList';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

import { ModalContents, ModalTitle, ModalWrapper } from './index.style';

interface CreateChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateChatModal({
  open,
  onClose,
}: CreateChatModalProps) {
  const [email, setEmail] = useState<string>('');
  const { data, isLoading } = useUserList(email);

  const onResetEamail = () => setEmail('');

  return (
    <ModalWrapper open={open} onClose={onClose} style={{ padding: '' }}>
      <ModalContents>
        <ModalTitle>받는 사람의 이메일을 입력하세요</ModalTitle>
        <Autocomplete
          loading={isLoading}
          onOpen={onResetEamail}
          onClose={onResetEamail}
          options={(data ?? []).map((user) => user.email)}
          renderInput={(params) => (
            <TextField
              {...params}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {isLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      </ModalContents>
    </ModalWrapper>
  );
}
