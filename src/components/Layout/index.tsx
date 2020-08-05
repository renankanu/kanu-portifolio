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
      </Head>
      <LayoutElement>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutElement>
    </>
  )
}

export default Layout
