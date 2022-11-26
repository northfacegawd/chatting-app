import axios from 'axios';

import { Chat, ChatRoom, User } from '@prisma/client';

interface ChatRoomWithUser extends ChatRoom {
  users: User[];
  chats: Chat[];
}

interface ChatListResponse {
  chatList: ChatRoomWithUser[];
  ok: boolean;
}

export const fetchChatList = async () => {
  const { data } = await axios.get<ChatListResponse>('/api/chat/list');
  return data.chatList;
};
