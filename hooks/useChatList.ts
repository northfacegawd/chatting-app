import { useQuery } from 'react-query';

import { fetchChatList } from '@requests/chat';

const useChatList = () => {
  const fetchFn = () => fetchChatList();
  return useQuery('chatList', fetchFn);
};

export default useChatList;
