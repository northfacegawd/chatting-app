import { UseMutationOptions, useMutation } from 'react-query';

import { ChatRoom } from '@prisma/client';
import { createChatRoom } from '@requests/chat';

interface UseCreatChatRoomOptions
  extends Omit<
    UseMutationOptions<ChatRoom, unknown, void, unknown>,
    'mutationFn'
  > {}

const useCreateChatRoom = (
  email: string,
  options?: UseCreatChatRoomOptions,
) => {
  const mutationFn = () => createChatRoom(email);
  return useMutation(mutationFn, options);
};

export default useCreateChatRoom;
