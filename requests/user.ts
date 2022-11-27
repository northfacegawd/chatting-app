import axios from 'axios';

import { UsersResponse } from '@models/user';

export const fetchUsers = async (email?: string) => {
  const { data } = await axios.get<UsersResponse>('/api/user/find', {
    params: { email },
  });
  return data.userList;
};
