import { useQuery } from 'react-query';

import { fetchUsers } from '@requests/user';

const useUserList = (email: string) => {
  const fetchFn = () => fetchUsers(email);
  return useQuery('userList', fetchFn);
};

export default useUserList;
