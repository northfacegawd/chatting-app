import { useQuery } from 'react-query';

import { fetchChatRooms } from '@requests/chat';

const useChatList = () => {
  const fetchFn = () => fetchChatRooms();
  return useQuery('chatList', fetchFn);
};

export default useChatList;
