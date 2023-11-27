import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const login = defineStyle({
  alignItems: "flex-start",
  width: "100%",
  gap: "4px",
  alignSelf: "stretch",
  border: "2px solid red",
});

export const formControlTheme = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDirection: "column",
  },
  defaultProps: {
    variant: "login",
  },
  variants: { login },
});
