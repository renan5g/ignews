import { Home } from '@templates/Home';
import type { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <Home />
    </>
  );
};

export default Page;
