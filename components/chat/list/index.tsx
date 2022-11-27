import React, { useMemo, useState } from 'react';

import ChatItem from '@components/chat';
import useChatList from '@hooks/useChatRooms';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

import { MoreChattingButton, SearchBox } from '../section/index.style';
import ChatItemSkeleton from '../skeleton';
import { ChatListWrapper } from './index.style';

export default function ChatList() {
  const { data, isLoading } = useChatList();
  const [keyword, setKeyword] = useState('');

  const chatRooms = useMemo(() => {
    if (!keyword.trim()) return data ?? [];
    return (data ?? []).filter(
      ({ users }) =>
        !!users.find(({ name }) =>
          name?.toLowerCase().includes(keyword.toLowerCase()),
        ),
    );
  }, [data, keyword]);

  return (
    <>
      <SearchBox>
        <Paper
          component="div"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="대화 검색하기"
            inputProps={{ 'aria-label': '대화 검색하기' }}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </SearchBox>
      <ChatListWrapper>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <ChatItemSkeleton key={(i + 1).toString()} />
            ))
          : chatRooms.map((item) => <ChatItem key={item.id} {...item} />)}
      </ChatListWrapper>
      <MoreChattingButton endIcon={<ExpandMore />} disabled>
        이전 대화 불러오기
      </MoreChattingButton>
    </>
  );
}
