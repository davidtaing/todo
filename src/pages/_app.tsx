import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
