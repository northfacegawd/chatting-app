import React from 'react';

import Button from '@mui/material/Button';

import { ActionBox, MessageArea, WriteForm } from './index.style';

export default function Write() {
  return (
    <WriteForm>
      <MessageArea placeholder="내용을 작성해 주세요." />
      <ActionBox>
        <Button variant="contained" type="submit">
          보내기
        </Button>
      </ActionBox>
    </WriteForm>
  );
}
