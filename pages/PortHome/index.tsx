import React from 'react';
import Header from 'components/Header';
import Intro from 'components/Intro';
import { Container } from './styles';

const PortHome: React.FC = () => {
  return (
    <Container>
      <Header />
      <Intro />
    </Container>
  );
};

export default PortHome;
