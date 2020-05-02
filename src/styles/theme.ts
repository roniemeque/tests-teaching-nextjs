const light = {
  background: "white",
  text: "#A6A6A6",
  main: "#EF4565",
  secondary: "white",
};

const defaultTheme = {
  gutter: "1rem",
  fontFamily: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
  "Arial", sans-serif`,
  colors: {
    black: "black",
    ...light,
  },
  border: {
    normal: "10px",
    small: "5px",
    smaller: "3px",
  },
  shadows: {
    normal: "0 1px 3px rgba(75, 75, 75, 0.5)",
  },
};

export const theme = defaultTheme;

// infering type directly from the used theme
export type Theme = typeof theme;
