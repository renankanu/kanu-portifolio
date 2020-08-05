import Head from 'next/head'
import React from 'react'
import PortHome from './PortHome'

const Home: React.FC = () => {
  const title = '<RenanKanu>'
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortHome />
    </>
  )
}

export default Home
