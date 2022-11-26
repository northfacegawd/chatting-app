import React, { PropsWithChildren } from 'react';

import ChatSection from '@components/chat/section';

import Header from './header';
import { Main } from './index.style';

interface LayoutProps {
  renderChatSection: boolean;
}

export default function Layout({
  children,
  renderChatSection,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Header />
      <Main>
        {renderChatSection && <ChatSection />}
        {children}
      </Main>
      <footer />
    </>
  );
}
