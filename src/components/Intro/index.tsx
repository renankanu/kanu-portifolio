import React from 'react'
import {
  Container,
  TagGreen,
  Label,
  Avatar,
  ContainerIntroDesc,
  ContainerIntroImage,
  Title,
  ContainerTitle,
} from './style'

const Intro: React.FC = () => {
  return (
    <Container id="about">
      <ContainerIntroDesc>
        <TagGreen>
          <Label>Mobile Developer</Label>
        </TagGreen>
        <ContainerTitle>
          <Title>Talk is cheap.</Title>
          <Title>Show me the code</Title>
        </ContainerTitle>
      </ContainerIntroDesc>
      <ContainerIntroImage>
        <Avatar src="/kanu.jpg" alt="Renan Kanu" />
      </ContainerIntroImage>
    </Container>
  )
}

export default Intro
