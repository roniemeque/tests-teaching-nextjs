import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "emotion-theming";
import { globalStyles } from "../styles/global";
import { Global } from "@emotion/core";
import styled from "../styles/styled";
import Nav from "../components/app/Nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles}></Global>
      <Nav></Nav>
      <Main>
        <Component {...pageProps} />
      </Main>
      <footer>footer</footer>
    </ThemeProvider>
  );
}

const Main = styled.main`
  max-width: calc(900px + 2 * ${({ theme }) => theme.gutter});
  margin: 2rem auto 0;
  display: grid;
  padding-bottom: 5rem;
  grid-template-columns: ${({ theme }) => theme.gutter} 1fr ${({ theme }) =>
      theme.gutter};
  & > * {
    grid-column: 2 / -2;
    display: grid;
    gap: 2rem;
  }
  & > .full {
    grid-column: span 3;
  }
  justify-content: center;
  .gap-in-full {
    padding: 0 ${({ theme }) => theme.gutter};
  }
`;
