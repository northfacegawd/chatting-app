import { User } from '@prisma/client';

export interface UsersResponse {
  userList: User[];
  ok: boolean;
}
