import type { NextPage } from 'next';
import React from 'react';

import ChatItem from '../components/chat';

const Home: NextPage = () => {
  return (
    <div>
      <ChatItem />
    </div>
  );
};

export default Home;
