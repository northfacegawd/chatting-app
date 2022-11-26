import axios from 'axios';

import { User } from '@prisma/client';

interface UsersResponse {
  userList: User[];
  ok: boolean;
}

export const fetchUsers = async (email?: string) => {
  const { data } = await axios.get<UsersResponse>('/api/user/find', {
    params: { email },
  });
  return data.userList;
};
