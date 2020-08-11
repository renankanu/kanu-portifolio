import React from 'react'

import {
  ServiceSection,
  Container,
  SectionHeading,
  Title,
  SubTitle,
  MySkills,
  Skills,
  IconContainer,
  Icon,
  TitleSkill,
  DescriptionSkill,
} from './styles'

const Service: React.FC = () => {
  return (
    <ServiceSection>
      <Container>
        <SectionHeading>
          <Title>Serviços</Title>
          <SubTitle>Coisas que eu faço</SubTitle>
        </SectionHeading>
        <MySkills>
          <Skills>
            <IconContainer>
              <Icon className="fas fa-layer-group"></Icon>
            </IconContainer>
            <TitleSkill>Mobile Developer</TitleSkill>
            <DescriptionSkill>Desenvolvimento de APPs utilizando React Native</DescriptionSkill>
          </Skills>
          <Skills>
            <IconContainer>
              <Icon className="fas fa-layer-group"></Icon>
            </IconContainer>
            <TitleSkill>Mobile Developer</TitleSkill>
            <DescriptionSkill>Desenvolvimento de APPs utilizando React Native</DescriptionSkill>
          </Skills>
          <Skills>
            <IconContainer>
              <Icon className="fas fa-layer-group"></Icon>
            </IconContainer>
            <TitleSkill>Mobile Developer</TitleSkill>
            <DescriptionSkill>Desenvolvimento de APPs utilizando React Native</DescriptionSkill>
          </Skills>
          <Skills>
            <IconContainer>
              <Icon className="fas fa-layer-group"></Icon>
            </IconContainer>
            <TitleSkill>Mobile Developer</TitleSkill>
            <DescriptionSkill>Desenvolvimento de APPs utilizando React Native</DescriptionSkill>
          </Skills>
        </MySkills>
      </Container>
    </ServiceSection>
  )
}

export default Service
