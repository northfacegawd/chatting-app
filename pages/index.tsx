import type { GetServerSideProps, NextPage } from 'next';
import { withAuth } from 'next-auth/middleware';
import { getSession } from 'next-auth/react';
import React from 'react';

import { EmptyChatContents } from '@components/chat/contents/index.style';
import Layout from '@components/layout';

const Home: NextPage = () => {
  return (
    <Layout renderChatSection>
      <EmptyChatContents>
        <p>
          선택된 채팅이 없습니다.
          <br />
          <br />
          좌측 메뉴에 있는 채팅방을 선택하거나,
          <br />
          좌측 상단에 새로운 메시지 추가하기 버튼을 클릭하여 채팅을
          시작해주세요.
        </p>
      </EmptyChatContents>
    </Layout>
  );
};

export default Home;

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
