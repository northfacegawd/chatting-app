import { useQuery } from 'react-query';

import { fetchChatRooms } from '@requests/chat';

const useChatRooms = () => {
  const fetchFn = () => fetchChatRooms();
  return useQuery('chatList', fetchFn);
};

export default useChatRooms;
