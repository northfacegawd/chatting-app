import { Chat, User } from '@prisma/client';

export interface ChatWithUser extends Chat {
  user: User;
}
