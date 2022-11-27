import { useQuery } from 'react-query';

import { fetchUsers } from '@requests/user';

const useUserList = (email?: string) => {
  const fetchFn = () => fetchUsers(email);
  return useQuery(['userList', email], fetchFn);
};

export default useUserList;
