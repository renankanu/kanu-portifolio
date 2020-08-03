import Head from 'next/head';
import React from 'react';
import BasicLayout from 'layout/Basic';
import PortHome from './PortHome';

const Home: React.FC = () => {
  const title = '<RenanKanu>';
  return (
    <BasicLayout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortHome />
    </BasicLayout>
  );
};

export default Home;
