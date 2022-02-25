import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
  height: "100vh",
  display: "grid",
  placeItems: "center",

  padding: "0 15px",
}));

export const Main = styled.main(({ theme }) => ({
  maxWidth: 500,
  width: "100%",
  padding: "30px 20px 50px",
  position: "relative",

  backgroundColor: theme.palette.background.paper,
  borderRadius: 10,

  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  gap: 25,
}));

export const Header = styled.header(({ theme }) => ({
  h1: {
    margin: 0,

    fontSize: 14,
    letterSpacing: 4,
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
  },
}));

export const Content = styled.section(({ theme }) => ({
  p: {
    fontSize: 28,
    textAlign: "center",
    margin: 0,
  },
}));
