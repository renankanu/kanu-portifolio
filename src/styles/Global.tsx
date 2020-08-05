import { createGlobalStyle } from 'styled-components'
import defaultTheme, { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
html {
    box-sizing: inherit;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
*::before,
*::after {
    box-sizing: inherit;
}

body {
  background: ${({ theme }) => theme.backgroundApp};
  color: ${({ theme }) => theme.white};
  -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-family: 'Josefin Sans', sans-serif;
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
