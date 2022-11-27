import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';

import { ActionBox, MessageArea, WriteForm } from './index.style';

interface WriteFormData {
  message: string;
}

export default function Write() {
  const { register, handleSubmit, reset } = useForm<WriteFormData>();
  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (data: WriteFormData) => {
    if (!data.message.trim()) return;
    const chatData = {
      email: session?.user?.email,
      message: data.message,
      chatRoomId: router.query.chatRoomId?.toString(),
    };
    await axios.post('/api/chat', chatData);
    reset();
  };

  return (
    <WriteForm onSubmit={handleSubmit(onSubmit)}>
      <MessageArea
        {...register('message', { required: true })}
        placeholder="내용을 작성해 주세요."
      />
      <ActionBox>
        <Button variant="contained" type="submit">
          보내기
        </Button>
      </ActionBox>
    </WriteForm>
  );
}
