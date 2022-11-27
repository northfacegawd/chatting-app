import axios from 'axios';

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
