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

const Skill: React.FC = () => {
  return (
    <ServiceSection id="skill">
      <Container>
        <SectionHeading>
          <Title>Skills</Title>
          <SubTitle>Coisas que eu faço</SubTitle>
        </SectionHeading>
        <MySkills>
          <Skills data-aos="zoom-in" data-aos-delay="300">
            <IconContainer>
              <Icon className="fab fa-js"></Icon>
            </IconContainer>
            <TitleSkill>JavaScript</TitleSkill>
            <DescriptionSkill>
              Desenvolvimento de APPs utilizando o framework React Native com JavaScript.
            </DescriptionSkill>
          </Skills>
          <Skills data-aos="zoom-in" data-aos-delay="600">
            <IconContainer>
              <Icon className="fas fa-store"></Icon>
            </IconContainer>
            <TitleSkill>Google Play/Apple Store</TitleSkill>
            <DescriptionSkill>
              Experiência em publicação na loja App Store e Play Store.
            </DescriptionSkill>
          </Skills>
          <Skills data-aos="zoom-in" data-aos-delay="900">
            <IconContainer>
              <Icon className="fab fa-git-alt"></Icon>
            </IconContainer>
            <TitleSkill>Git</TitleSkill>
            <DescriptionSkill>Versionamento utilizando Git.</DescriptionSkill>
          </Skills>
        </MySkills>
        <MySkills>
          <Skills data-aos="zoom-in" data-aos-delay="300">
            <IconContainer>
              <Icon className="fab fa-aws"></Icon>
            </IconContainer>
            <TitleSkill>AWS</TitleSkill>
            <DescriptionSkill>
              Conhecimento em alguns serviços da AWS, como: eC2, SES, SNS, SQS, Route53, Lambda,
              RDS, S3.
            </DescriptionSkill>
          </Skills>
          <Skills data-aos="zoom-in" data-aos-delay="600">
            <IconContainer>
              <Icon className="fab fa-docker"></Icon>
            </IconContainer>
            <TitleSkill>Docker</TitleSkill>
            <DescriptionSkill>Administração de containers com Docker.</DescriptionSkill>
          </Skills>
          <Skills data-aos="zoom-in" data-aos-delay="900">
            <IconContainer>
              <Icon className="fab fa-android"></Icon>
            </IconContainer>
            <TitleSkill>Android Nativo</TitleSkill>
            <DescriptionSkill>
              Conhecimento em desenvolvimento de APPs nativo utilizando Kotlin como linguagem.
            </DescriptionSkill>
          </Skills>
        </MySkills>
      </Container>
    </ServiceSection>
  )
}

export default Skill
