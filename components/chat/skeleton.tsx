import React from 'react';

import Skeleton from '@mui/material/Skeleton';

import { MessageInfo, SkeletonWrapper } from './index.style';

export default function ChatItemSkeleton() {
  return (
    <SkeletonWrapper>
      <Skeleton variant="circular" width={36} height={36} />
      <MessageInfo>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={120} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={250} />
      </MessageInfo>
    </SkeletonWrapper>
  );
}
