import { createGlobalStyle } from "styled-components";
import customColors from "./customColors"

export default createGlobalStyle`
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
    background: ${customColors.backgroundApp};
    color: ${customColors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
      
  }

h1 {
    color: yellow !important; // the important is just to show that the style works!
}
`;