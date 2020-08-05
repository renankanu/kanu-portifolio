import React from 'react'
import Header from 'src/components/Header'
import Intro from 'src/components/Intro'
import { Container } from './styles'

const PortHome: React.FC = () => {
  return (
    <Container>
      <Header />
      <Intro />
    </Container>
  )
}

export default PortHome
