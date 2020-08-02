import Head from 'next/head'

export default function Home() {
  const title = "<RenanKanu>"
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>Main</p>
        </div>
      </main>

      <footer>
       <div>
         <p>Footer</p>
       </div>
      </footer>
    </div>
  )
}
