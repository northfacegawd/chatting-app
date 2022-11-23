import type { NextPage } from 'next';
import React from 'react';

import ChatContents from '@components/chat/contents';
import ChatSection from '@components/chat/section';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ChatSection />
      <ChatContents />
    </div>
  );
};

export default Home;
