import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const inputTheme = defineMultiStyleConfig({
  variants: {
    login: {
      field: {
        width: "312px",
        display: "flex",
        height: "40px",
        backgroundColor: "white",
        borderRadius: "8px",
        border: "2px solid var(--chakra-colors-black)",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        padding: "8px 16px",
        fontSize: "16px",
        color: "black",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
        _placeholder: {
          color: "darkGray",
        },
      },
    },
  },
});
