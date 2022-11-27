import { useQuery } from 'react-query';

import { fetchChats } from '@requests/chat';

const useChats = (id: string) => {
  const fetchFn = () => fetchChats(id);
  return useQuery(['chats', id], fetchFn, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 0,
  });
};

export default useChats;
