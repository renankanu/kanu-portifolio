import React from 'react'
import About from 'src/components/About'
import { Container } from './styles'
import HeaderLanding from 'src/components/HeaderLanding'
import WorkExperience from 'src/components/WorkExperience'

const PortHome: React.FC = () => {
  return (
    <Container>
      <HeaderLanding />
      <About />
      <WorkExperience />
    </Container>
  )
}

export default PortHome
