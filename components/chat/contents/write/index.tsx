import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@mui/material/Button';

import { ActionBox, MessageArea, WriteForm } from './index.style';

interface WriteFormData {
  message: string;
}

export default function Write() {
  const { register, handleSubmit } = useForm<WriteFormData>();

  const onSubmit = async (data: WriteFormData) => {
    console.log(data);
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
