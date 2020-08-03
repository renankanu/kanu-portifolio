import React, { useState } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, Overlay, MyName, Container, Anchor } from './styles';

const Header: React.FC = () => {
  const [sidebar, toggle] = useState(false);
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Container>
        <Link href="/">
          <MyName>Renan Kanu</MyName>
        </Link>
        <Anchor desktop="">
          <AnchorLink href="#about">Sobre</AnchorLink>
          <AnchorLink href="#projects">Projetos</AnchorLink>
          <AnchorLink href="#contact">Contatos</AnchorLink>
        </Anchor>
      </Container>
    </Wrapper>
  );
};

export default Header;
