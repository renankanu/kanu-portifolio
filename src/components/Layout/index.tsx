import React from 'react'
import Head from 'next/head'
import Header from '../Header'

import LayoutElement from './styles'
import Footer from '../Footer/index'

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutElement>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutElement>
  )
}

export default Layout
