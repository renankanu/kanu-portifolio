import React from 'react'

import {
  LearnSection,
  Container,
  SectionHeading,
  Title,
  SubTitle,
  MyStudies,
  LearnItem,
  IconContainer,
  TitleSkill,
  StackImg,
} from './styles'

const Learn: React.FC = () => {
  return (
    <LearnSection id="learn">
      <Container>
        <SectionHeading>
          <Title>De Olho</Title>
          <SubTitle>Stacks/Frameworks que estou de olho</SubTitle>
        </SectionHeading>
        <MyStudies>
          <LearnItem data-aos="zoom-in" data-aos-delay="300">
            <IconContainer>
              <StackImg alt="flutter" src="/flutter.png" />
            </IconContainer>
            <TitleSkill>Flutter</TitleSkill>
          </LearnItem>
          <LearnItem data-aos="zoom-in" data-aos-delay="500">
            <IconContainer>
              <StackImg alt="nextjs" src="/nextjs.png" />
            </IconContainer>
            <TitleSkill>NextJs</TitleSkill>
          </LearnItem>
          <LearnItem data-aos="zoom-in" data-aos-delay="700">
            <IconContainer>
              <StackImg alt="typescript" src="/typescript.png" />
            </IconContainer>
            <TitleSkill>TypeScript</TitleSkill>
          </LearnItem>
          <LearnItem data-aos="zoom-in" data-aos-delay="900">
            <IconContainer>
              <StackImg alt="nodejs" src="/nodejs.png" />
            </IconContainer>
            <TitleSkill>NodeJs</TitleSkill>
          </LearnItem>
          <LearnItem data-aos="zoom-in" data-aos-delay="1200">
            <IconContainer>
              <StackImg alt="reactjs" src="/reactjs.png" />
            </IconContainer>
            <TitleSkill>ReactJs</TitleSkill>
          </LearnItem>
        </MyStudies>
      </Container>
    </LearnSection>
  )
}

export default Learn
