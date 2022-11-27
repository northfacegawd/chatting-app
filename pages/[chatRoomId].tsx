import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';

import ChatContents from '@components/chat/contents';
import Layout from '@components/layout';

const ChatRoom: NextPage = () => {
  return (
    <Layout renderChatSection>
      <ChatContents />
    </Layout>
  );
};

export default ChatRoom;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
