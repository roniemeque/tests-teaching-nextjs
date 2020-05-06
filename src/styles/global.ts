import { css } from "@emotion/core";
import { theme } from "./theme";

export const globalStyles = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Romanesco&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  ul,
  ol {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    font-family: ${theme.fontFamily};
    color: ${theme.colors.text};
    background-color: white;
  }
  ul[class],
  ol[class],
  li {
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  input {
    border: none;
    &:hover,
    &:focus {
      outline: none;
    }
  }
  a {
    text-decoration: none;
  }
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`;
