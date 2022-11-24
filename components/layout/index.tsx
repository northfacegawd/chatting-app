import React, { PropsWithChildren } from 'react';

import Header from './header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer />
    </>
  );
}
