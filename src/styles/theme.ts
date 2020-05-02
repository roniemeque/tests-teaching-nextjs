const light = {
  background: "white",
  text: "#6D7278",
  textOnMain: "white",
  main: "#EF4565",
  secondary: "white",
};

const defaultTheme = {
  gutter: "1rem",
  fontFamily: "sans-serif",
  colors: {
    black: "black",
    ...light,
  },
  border: {
    big: "15px",
    normal: "10px",
    small: "5px",
    smaller: "3px",
  },
  shadows: {
    normal: "0 1px 3px rgba(75, 75, 75, 0.5)",
    bigger: "0 3px 7px rgba(75, 75, 75, 0.6)",
  },
};

export const theme = defaultTheme;

// infering type directly from the used theme
export type Theme = typeof theme;
