import React from 'react'
import Head from 'next/head'
import Header from '../Header'

import LayoutElement from './styles'
import Footer from '../Footer/index'

interface LayoutProps {
  pageTitle: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description = 'Next.js Portifolio',
  children,
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
      </Head>
      <LayoutElement>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </LayoutElement>
    </>
  )
}

export default Layout
