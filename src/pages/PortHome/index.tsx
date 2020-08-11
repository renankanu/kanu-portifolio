import React from 'react'
import About from 'src/components/About'
import { Container } from './styles'
import HeaderLanding from 'src/components/HeaderLanding'
import WorkExperience from 'src/components/WorkExperience'
import Skill from 'src/components/Skill'

const PortHome: React.FC = () => {
  return (
    <Container>
      <HeaderLanding />
      <About />
      <Skill />
      <WorkExperience />
    </Container>
  )
}

export default PortHome
