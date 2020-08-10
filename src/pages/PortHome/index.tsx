import React from 'react'
import Header from 'src/components/Header'
import Intro from 'src/components/Intro'
import { Container } from './styles'
import HeaderLanding from 'src/components/HeaderLanding'

const PortHome: React.FC = () => {
  return (
    <Container>
      <HeaderLanding />
      <Intro />
    </Container>
  )
}

export default PortHome
