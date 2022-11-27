import { Chat, ChatRoom, User } from '@prisma/client';

export interface ChatWithUser extends Chat {
  user: User;
}

export interface MessageData {
  message: string;
  email: string;
}

export interface ChatRoomWithUser extends ChatRoom {
  users: User[];
  chats: Chat[];
}

export interface ChatRoomsResponse {
  chatRooms: ChatRoomWithUser[];
  ok: boolean;
}

export interface CreateChatRoomResponse {
  chatRoom: ChatRoom;
  ok: boolean;
}

export interface PostChatData {
  email: string;
  chatRoomId: string;
  message: string;
}

export interface PostChatResponse {
  chat: Chat;
  ok: boolean;
}

export interface ChatsResponse {
  chats: ChatWithUser[];
  ok: boolean;
}

export interface CountResponse {
  ok: boolean;
  unReadCount: number;
}

export interface ChatRoomResponse {
  ok: boolean;
  chatRoom: ChatRoomWithUser;
}
