import React from 'react';

import ChatList from '@components/chat/list';
import Search from '@components/common/auto-complete';
import useUserList from '@hooks/useUserList';
import Add from '@mui/icons-material/Add';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import {
  ChatCount,
  ChatSectionHeader,
  ChatSectionWrapper,
  MoreChattingButton,
  SearchBox,
} from './index.style';

export default function ChatSection() {
  const { data } = useUserList('chuck5732590');

  console.log(data);

  return (
    <ChatSectionWrapper>
      <ChatSectionHeader>
        <ChatCount>안 읽은 대화(2)</ChatCount>
        <Button variant="contained" startIcon={<Add />}>
          새로운 메세지
        </Button>
      </ChatSectionHeader>
      <SearchBox>
        <Search />
      </SearchBox>
      <ChatList />
      <MoreChattingButton endIcon={<ExpandMore />}>
        이전 대화 불러오기
      </MoreChattingButton>
    </ChatSectionWrapper>
  );
}
