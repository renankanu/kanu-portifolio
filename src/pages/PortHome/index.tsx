import React from 'react'
import About from 'src/components/About'
import { Container } from './styles'
import HeaderLanding from 'src/components/HeaderLanding'
import WorkExperience from 'src/components/WorkExperience'
import Service from 'src/components/Service'

const PortHome: React.FC = () => {
  return (
    <Container>
      <HeaderLanding />
      <About />
      <WorkExperience />
      <Service />
    </Container>
  )
}

export default PortHome
