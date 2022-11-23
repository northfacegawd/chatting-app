import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import CssBaseline from '@mui/material/CssBaseline';

import '../styles/globals.css';
import '../styles/theme.css';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState; session: Session }>) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps?.dehydratedState}>
        <CssBaseline />
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
