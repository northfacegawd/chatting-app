import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import useMutation from '@hooks/useMutation';
import Button from '@mui/material/Button';
import { Chat } from '@prisma/client';

import { ActionBox, MessageArea, WriteForm } from './index.style';

interface WriteFormData {
  message: string;
}

export default function Write() {
  const { register, handleSubmit, reset } = useForm<WriteFormData>();
  const { data: session } = useSession();
  const router = useRouter();
  const [mutation, { loading }] = useMutation<Chat>('/api/chat');

  const onSubmit = async (data: WriteFormData) => {
    const email = session?.user?.email;
    const chatRoomId = router.query.chatRoomId?.toString();
    if (!data.message.trim() || !email || !chatRoomId) return;
    await mutation({ email, chatRoomId, ...data });
    reset();
  };

  return (
    <WriteForm onSubmit={handleSubmit(onSubmit)}>
      <MessageArea
        {...register('message', { required: true })}
        placeholder="내용을 작성해 주세요."
      />
      <ActionBox>
        <Button variant="contained" type="submit" disabled={loading}>
          보내기
        </Button>
      </ActionBox>
    </WriteForm>
  );
}
