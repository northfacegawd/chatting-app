import { useQuery } from 'react-query';

import { fetchChatList } from '@requests/chat';

const useChatList = () => {
  const fetchFn = () => fetchChatList();
  return useQuery('chatList', fetchFn, {
    refetchInterval: 3000,
    refetchIntervalInBackground: true,
  });
};

export default useChatList;
