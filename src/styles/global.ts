import { createGlobalStyle } from "styled-components";

import ManropeExtraBold from "../assets/fonts/Manrope-ExtraBold.ttf";

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  "@font-face": {
    fontFamily: "Manrope",
    src: `url(${ManropeExtraBold}) format('truetype')`,
    fontWeight: 800,
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    "@media (max-width: 1080px)": {
      fontSize: "93.75%",
    },

    "@media (max-width: 720px)": {
      fontSize: "87.5%",
    },
  },

  body: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },

  "body, input, textarea, button": {
    fontFamily: '"Manrope", sans-serif',
    WebkitFontSmoothing: "antialiased",
  },

  "h1, h2, h3, h4, h5, h6, strong": {
    fontWeight: 600,
  },

  button: {
    cursor: "pointer",
    "&[disabled]": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },

  // "*, *:before, *:after": {
  //   boxSizing: "border-box",
  // },

  // body: {
  //   backgroundColor: theme.palette.background.default,
  //   color: theme.palette.text.primary,

  //   margin: 0,
  //   padding: 0,
  // },
}));

export default GlobalStyle;
