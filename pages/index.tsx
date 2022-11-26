import type { NextPage } from 'next';
import React from 'react';

import ChatContents from '@components/chat/contents';
import Layout from '@components/layout';

const Home: NextPage = () => {
  return (
    <Layout renderChatSection>
      <ChatContents />
    </Layout>
  );
};

export default Home;
