import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primario: white;
  }

  footer {
    position: relative;
    padding-top: 90vh;
  }
  
  html {
    font-size: 62.5%;
      box-sizing: border-box; /* Acondicionamiento para box model */
    overflow-x: hidden;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }

  body {
    background-color: var(--primario);
    font-size: 16px;
  }
`;

export default GlobalStyles;