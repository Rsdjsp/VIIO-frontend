import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const login = defineStyle({
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "32px",
});
const label = defineStyle({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
});
const nav = defineStyle({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
});
const nav2 = defineStyle({
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "28px",
});
const nav3 = defineStyle({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
});
const name = defineStyle({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
});
const price = defineStyle({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
});
const productName = defineStyle({
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "32px",
});

const or = defineStyle({
  width: "100%",
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0.96px",
  textTransform: "uppercase",
  textAlign: "center",
});

export const textTheme = defineStyleConfig({
  baseStyle: {
    color: "black",
    fontStyle: "normal",
  },

  variants: { login, label, or, nav, nav2, name, price, nav3, productName },
});
