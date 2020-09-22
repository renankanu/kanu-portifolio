import React from 'react'
import {
  Container,
  SubTitle,
  Image,
  ContainerIntroDesc,
  ContainerImage,
  Title,
  AboutSection,
  AboutHeading,
  Description,
  SocialMediaContainer,
  IconLink,
  ListItem,
  Item,
  NavList,
} from './style'

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <ContainerImage data-aos="fade-right" data-aos-delay="300">
          <Image src="/kanu.jpg" alt="Renan Kanu" />
        </ContainerImage>
        <ContainerIntroDesc>
          <AboutHeading>
            <Title>Sobre</Title>
            <SubTitle>Renan</SubTitle>
          </AboutHeading>
          <Description>
            {`Olá, meu nome é Renan e moro em Cianorte-PR.
            Comecei na programação em 2016 como desenvolvedor Android Nativo
            com Java, em 2018 comecei a codar Android Nativo com Kotlin e no
            segundo semestre de 2019 comecei a programar em React Native
            e estou até o momento. Estudando e lendo sobre Flutter, NodeJs e
            me arriscando no Front End Web.`}
          </Description>
          <SocialMediaContainer>
            <NavList>
              <ListItem>
                <IconLink href="https://www.facebook.com/renan.santos.92123/" target="_blank">
                  <Item className="fab fa-facebook-square"></Item>
                </IconLink>
              </ListItem>
              <ListItem>
                <IconLink href="https://github.com/renankanu" target="_blank">
                  <Item className="fab fa-github"></Item>
                </IconLink>
              </ListItem>
              <ListItem>
                <IconLink href="https://www.linkedin.com/in/renansantosbr/" target="_blank">
                  <Item className="fab fa-linkedin-in"></Item>
                </IconLink>
              </ListItem>
            </NavList>
          </SocialMediaContainer>
        </ContainerIntroDesc>
      </Container>
    </AboutSection>
  )
}

export default About
