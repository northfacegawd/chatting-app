import axios from 'axios';

import { Chat, ChatRoom, User } from '@prisma/client';

export interface ChatRoomWithUser extends ChatRoom {
  users: User[];
  chats: Chat[];
}

interface ChatListResponse {
  chatList: ChatRoomWithUser[];
  ok: boolean;
}

interface CreateChatRoomResponse {
  chatRoom: ChatRoom;
  ok: boolean;
}

export const fetchChatList = async () => {
  const { data } = await axios.get<ChatListResponse>('/api/chat/list');
  return data.chatList;
};

export const createChatRoom = async (email: string) => {
  const { data } = await axios.post<CreateChatRoomResponse>(
    '/api/chat/create',
    {
      email,
    },
  );
  return data.chatRoom;
};

export interface PostChatData {
  email: string;
  chatRoomId: string;
  message: string;
}

interface PostChatResponse {
  chat: Chat;
  ok: boolean;
}

export const postChat = async (chatData: PostChatData) => {
  const { data } = await axios.post<PostChatResponse>('/api/chat', chatData);
  return data.chat;
};
