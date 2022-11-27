import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

import { User } from '@prisma/client';
import { ChatRoomWithUser } from '@requests/chat';

const useChatRoomInfo = (chatRoom: ChatRoomWithUser) => {
  const session = useSession();

  const getName = useCallback(
    (users: User[]) =>
      users.find((user) => user.email !== session.data?.user?.email)?.name,
    [session.data?.user?.email],
  );

  const data = {
    date: chatRoom.chats[0]?.createAt?.toISOString?.(),
    name: getName(chatRoom.users),
    lastMessage: chatRoom.chats[0]?.message,
  };

  return { ...data };
};

export default useChatRoomInfo;
