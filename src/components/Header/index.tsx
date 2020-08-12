import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  Wrapper,
  Overlay,
  MyName,
  MyNickname,
  Container,
  Anchor,
  Hamburger,
  Bar,
  Sidebar,
} from './styles'

const Header: React.FC = () => {
  const [sidebar, toggle] = useState(false)
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Container>
        <MyName>
          {'<Renan'}
          <MyNickname>{'Kanu>'}</MyNickname>
        </MyName>
        <Anchor desktop>
          <AnchorLink href="#about">Sobre</AnchorLink>
          <AnchorLink href="#skill">Skills</AnchorLink>
          <AnchorLink href="#learn">Interesse</AnchorLink>
          <AnchorLink href="#workExp">Experiência</AnchorLink>
        </Anchor>
      </Container>
      <Hamburger sidebar={sidebar} onClick={() => toggle(!sidebar)}>
        <Bar top sidebar={sidebar} />
        <Bar mid sidebar={sidebar} />
        <Bar bottom sidebar={sidebar} />
      </Hamburger>
      <Sidebar active={sidebar} onClick={toggle}>
        <Anchor>
          <AnchorLink href="#about">Sobre</AnchorLink>
          <AnchorLink href="#projects">Skills</AnchorLink>
          <AnchorLink href="#learn">Interesse</AnchorLink>
          <AnchorLink href="#workExp">Experiência</AnchorLink>
        </Anchor>
      </Sidebar>
    </Wrapper>
  )
}

export default Header
