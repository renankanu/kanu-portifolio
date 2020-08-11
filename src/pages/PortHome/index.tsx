import React from 'react'
import About from 'src/components/About'
import { Container } from './styles'
import HeaderLanding from 'src/components/HeaderLanding'

const PortHome: React.FC = () => {
  return (
    <Container>
      <HeaderLanding />
      <About />
    </Container>
  )
}

export default PortHome
