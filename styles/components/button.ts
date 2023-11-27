import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const login = defineStyle({
  borderRadius: "8px",
  backgroundColor: "black",
  width: "100%",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
});
const provider = defineStyle({
  borderRadius: "8px",
  backgroundColor: "white",
  color: "black",
  border: "2px solid var(--chakra-colors-black)",
  width: "100%",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
});

const home = defineStyle({
  display: "flex",
  padding: "8px 12px",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  borderRadius: "full",
  background: "extraLightGray",
  width: "88px",
  height: "36px",
});

const menu = defineStyle({
  display: "flex",
  alignItems: "flex-start",
  color: "darkGray",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
  borderRadius: "0px",
  padding: " 8px 0px",
  height: "fit-content",
  width: "fit-content",
  maxH: "36px",
  maxWidth: "70px",
  _hover: {
    color: "black",
    borderBottom: "2px solid black",
    backgroundColor: "white",
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    display: "flex",
    padding: "8px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    alignSelf: "stretch",
  },
  variants: { login, provider, home, menu },
});
