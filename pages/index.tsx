import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import BasicLayout from 'layout/Basic'

const Home = () => {
  const title = "<RenanKanu>"
  return (
    <BasicLayout>
    <Layout title="Home | Next.js + TypeScript Example">
     <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
       </p>
    </Layout>
    </BasicLayout>
  )
}

export default Home;