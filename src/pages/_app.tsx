import { Header } from '@components/Header';
import { globalStyles } from '@stitches';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
