import { useQuery } from 'react-query';

import { fetchChatRooms } from '@requests/chat';

const useChatRooms = () => {
  const fetchFn = () => fetchChatRooms();
  return useQuery(['chatRooms'], fetchFn);
};

export default useChatRooms;
