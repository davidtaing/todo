import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.secondary};
  }

  .wrapper {
    width: 100%;
    max-width: 1620px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
