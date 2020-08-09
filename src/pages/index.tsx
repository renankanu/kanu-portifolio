import React from 'react'
import PortHome from './PortHome'
import Layout from '../components/Layout/index'

const Home: React.FC = () => {
  const title = '<RenanKanu>'
  return (
    <Layout pageTitle={title}>
      <PortHome />
    </Layout>
  )
}

export default Home
