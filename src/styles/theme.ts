import common from "./palette/common";

export type Theme = typeof theme;

const theme = {
  palette: {
    primary: {
      main: "hsl(150, 100%, 66%)",
    },
    background: {
      default: "hsl(217, 19%, 24%)",
      paper: "hsl(217, 19%, 38%)",
    },
    text: {
      primary: common.white,
    },
    divider: common.white,
  },
};

export default theme;
