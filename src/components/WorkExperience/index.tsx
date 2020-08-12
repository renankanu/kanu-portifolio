import React from 'react'
import {
  ExperienceSection,
  Container,
  SectionHeading,
  Title,
  SubTitle,
  TimeLine,
  UndecoratedList,
  ListItem,
  WorkTitle,
  WorkDesc,
} from './styles'

const WorkExperience: React.FC = () => {
  return (
    <ExperienceSection id="workExp">
      <Container>
        <SectionHeading>
          <Title>Experiência de trabalho</Title>
          <SubTitle>Trabalhos anteriores e atuais</SubTitle>
        </SectionHeading>
        <TimeLine>
          <UndecoratedList>
            <ListItem data-date="2019 - atual">
              <WorkTitle>Megaleios</WorkTitle>
              <WorkDesc>
                Desenvolvimento de APP utilizando React Native, JavaScript e Flutter
              </WorkDesc>
            </ListItem>
            <ListItem data-date="2016 - 2019">
              <WorkTitle>Sisterra</WorkTitle>
              <WorkDesc>
                Desenvolvimento de APP nativo com Java, Kotlin, API e microserviços com PHP, Docker
                e alguns serviços da AWS(eC2, SES, SNS, SQS, Route53, Lambda, RDS, S3)
              </WorkDesc>
            </ListItem>
          </UndecoratedList>
        </TimeLine>
      </Container>
    </ExperienceSection>
  )
}

export default WorkExperience
