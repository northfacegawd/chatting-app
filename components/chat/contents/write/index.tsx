import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { MessageData } from '@models/chat';
import Button from '@mui/material/Button';

import { ActionBox, MessageArea, WriteForm } from './index.style';

interface WriteFormData {
  message: string;
}

interface WriteProps {
  onSendMessage: (messageData: MessageData) => void;
}

export default function Write({ onSendMessage }: WriteProps) {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<WriteFormData>();
  const { data: session } = useSession();

  const onSubmit = async (data: WriteFormData) => {
    const email = session?.user?.email;
    const chatRoomId = router.query.chatRoomId?.toString();
    if (!data.message.trim() || !email || !chatRoomId) return;
    // await mutation({ email, chatRoomId, ...data });
    onSendMessage({ ...data, email });
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
