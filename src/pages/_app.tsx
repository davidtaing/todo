import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
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

const theme = {
  colors: {
    primary: "#66DE93",
    secondary: "#FFEAC9",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
