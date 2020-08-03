import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home = () => {
  const title = "<RenanKanu>"
  return (
    <Layout title="Home | Next.js + TypeScript Example">
     <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
       </p>
    </Layout>
  )
}

export default Home;