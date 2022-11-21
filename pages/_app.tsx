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

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps?.dehydratedState}>
        <CssBaseline />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
