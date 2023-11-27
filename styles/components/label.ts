import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const login = defineStyle({
  color: "black",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "20px",
  width: "67px",
});

export const labelTheme = defineStyleConfig({
  baseStyle: {
    color: "black",
    fontSize: "14px",
  },
  defaultProps: {
    variant: "login",
  },
  variants: { login },
});
