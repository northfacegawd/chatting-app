import { useQuery } from 'react-query';

import { fetchChatRoom } from '@requests/chat';

const useChatRoom = (id: string) => {
  const fetchFn = () => fetchChatRoom(id);
  return useQuery(['chatRoom', id], fetchFn);
};

export default useChatRoom;
