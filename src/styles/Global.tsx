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

body, input, button {
    font-family: 'Fira Code', sans-serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}
`

export default GlobalStyle
