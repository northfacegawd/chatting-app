import axios from 'axios';

import {
  ChatRoomResponse,
  ChatRoomsResponse,
  ChatsResponse,
  CountResponse,
  CreateChatRoomResponse,
  PostChatData,
  PostChatResponse,
} from '@models/chat';

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

export const postChat = async (chatData: PostChatData) => {
  const { data } = await axios.post<PostChatResponse>('/api/chat', chatData);
  return data.chat;
};

export const fetchChats = async (id: string) => {
  const { data } = await axios.get<ChatsResponse>('/api/chat', {
    params: { id },
  });
  return data.chats;
};

export const fetchCount = async (id?: string) => {
  const { data } = await axios.get<CountResponse>('/api/chat/count', {
    params: { id },
  });
  return data.unReadCount;
};

export const fetchChatRoom = async (id: string) => {
  const { data } = await axios.get<ChatRoomResponse>(`/api/chat/room/${id}`);
  return data.chatRoom;
};
