import styled from 'styled-components'

const FooterElement = styled.footer`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.menu};
  color: ${({ theme }) => theme.white};
  font-size: 1.3em;
  width: 100%;
`

export default FooterElement
