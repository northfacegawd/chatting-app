import { useQuery } from 'react-query';

import { fetchChats } from '@requests/chat';

const useChats = (id: string) => {
  const fetchFn = () => fetchChats(id);
  return useQuery(['chats', id], fetchFn, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export default useChats;
