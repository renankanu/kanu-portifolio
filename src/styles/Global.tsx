import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box
}

html {
  font-size: 10px;
  font-family: 'Fira Code', sans-serif;
  color: #eee;
}

body {
  width: 100%;
  height: 100%;
  background: url("/backg.jpg") no-repeat center fixed;
  background-size: cover;
  color: ${({ theme }) => theme.white};
  overflow-x: hidden;
}
`

export default GlobalStyle
