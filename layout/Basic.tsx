import { createGlobalStyle } from "styled-components";
import customColors from '../styles/customColors';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
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
    background: ${customColors .backgroundApp};
    color: ${customColors.white};
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;