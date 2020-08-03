import Head from 'next/head'
import Link from 'next/link'
import BasicLayout from 'layout/Basic'
import PortHome from './PortHome'

const Home = () => {
  const title = "<RenanKanu>"
  return (
    <BasicLayout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortHome />
    </BasicLayout>
  )
}

export default Home;