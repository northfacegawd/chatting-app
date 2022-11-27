import axios from 'axios';

import { ChatWithUser } from '@models/chat';
import { Chat, ChatRoom, User } from '@prisma/client';

export interface ChatRoomWithUser extends ChatRoom {
  users: User[];
  chats: Chat[];
}

interface ChatRoomsResponse {
  chatRooms: ChatRoomWithUser[];
  ok: boolean;
}

interface CreateChatRoomResponse {
  chatRoom: ChatRoom;
  ok: boolean;
}

export const fetchChatRooms = async () => {
  const { data } = await axios.get<ChatRoomsResponse>('/api/chat/room/list');
  return data.chatRooms;
};

export const createChatRoom = async (email: string) => {
  const { data } = await axios.post<CreateChatRoomResponse>(
    '/api/chat/room/create',
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

interface ChatsResponse {
  chats: ChatWithUser[];
  ok: boolean;
}

export const fetchChats = async (id: string) => {
  const { data } = await axios.get<ChatsResponse>('/api/chat', {
    params: { id },
  });
  return data.chats;
};

interface CountResponse {
  ok: boolean;
  unReadCount: number;
}

export const fetchCount = async (id?: string) => {
  const { data } = await axios.get<CountResponse>('/api/chat/count', {
    params: { id },
  });
  return data.unReadCount;
};

interface ChatRoomResponse {
  ok: boolean;
  chatRoom: ChatRoomWithUser;
}

export const fetchChatRoom = async (id: string) => {
  const { data } = await axios.get<ChatRoomResponse>(`/api/chat/room/${id}`);
  return data.chatRoom;
};
