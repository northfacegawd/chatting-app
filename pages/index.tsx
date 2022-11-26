import type { NextPage } from 'next';
import React from 'react';

import Layout from '@components/layout';

const Home: NextPage = () => {
  return <Layout renderChatSection>{/* <ChatContents /> */}</Layout>;
};

export default Home;
