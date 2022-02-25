import styled from "styled-components";

const transitionTime = 150;

export const RoundedButton = styled.button(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translate(-50%, 50%)",
  cursor: "pointer",
  userSelect: "none",
  appearance: "none",
  textDecoration: "none",
  textAlign: "center",
  verticalAlign: "middle",

  outline: 0,
  margin: 0,
  border: 0,
  padding: 8,

  backgroundColor: theme.palette.primary.main,

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  width: 50,
  borderRadius: "50%",

  overflow: "hidden",
  transition: `box-shadow ${transitionTime}ms ease-out`,

  "&:hover": {
    boxShadow: `0 0 25px 1px ${theme.palette.primary.main}`,
    transition: `box-shadow ${transitionTime}ms ease-in`,
  },
}));
