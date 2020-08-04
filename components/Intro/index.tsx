import React from 'react';
import {
  Container,
  TagGreen,
  Label,
  Avatar,
  ContainerIntroDesc,
  ContainerIntroImage,
} from './style';

const Intro: React.FC = () => {
  return (
    <Container id="about">
      <ContainerIntroDesc>
        <TagGreen>
          <Label>Mobile Developer</Label>
        </TagGreen>
        <div>Olá, meu nome é Renan.</div>
        <div>E este é meu portifolio, muito bem vindo.</div>
      </ContainerIntroDesc>
      <ContainerIntroImage>
        <Avatar src="/kanu.jpg" />
      </ContainerIntroImage>
    </Container>
  );
};

export default Intro;
