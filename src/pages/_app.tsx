import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "emotion-theming";
import { globalStyles } from "../styles/global";
import { Global } from "@emotion/core";
import styled from "../styles/styled";
import Nav from "../components/app/Nav";
import Footer from "../components/app/Footer";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles}></Global>
      <App>
        <Nav></Nav>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer></Footer>
      </App>
    </ThemeProvider>
  );
}

const App = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media (min-width: 900px) {
    border: 1.4rem solid #f7f7f7;
  }
`;

const Main = styled.main`
  width: calc(900px + 2 * ${({ theme }) => theme.gutter});
  max-width: 100vw;
  margin: 2rem auto 0;
  display: grid;
  justify-content: center;
  row-gap: 1rem;
  grid-template-columns: ${({ theme }) => theme.gutter} 1fr ${({ theme }) =>
      theme.gutter};
  & > * {
    grid-column: 2 / -2;
  }
  & > .full {
    grid-column: span 3;
  }
  .gap-in-full {
    padding: 0 ${({ theme }) => theme.gutter};
  }
`;
