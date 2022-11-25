import axios from 'axios';

import { ChatRoom } from '@prisma/client';

interface ChatListResponse {
  chatList: ChatRoom[];
  ok: boolean;
}

export const fetchChatList = async () => {
  const { data } = await axios.get<ChatListResponse>('/api/chat/list');
  return data.chatList;
};
