import React from 'react'
import { Container, Headerlanding, TitleName, SubTitleName } from './styles'

const HeaderLanding: React.FC = () => {
  return (
    <Headerlanding>
      <Container>
        <TitleName>{`<Renan Kanu>`}</TitleName>
        <SubTitleName>Desenvolvedor Mobile</SubTitleName>
      </Container>
    </Headerlanding>
  )
}

export default HeaderLanding
