import colors from "./colors";
import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { inputTheme } from "./components/input";
import { labelTheme } from "./components/label";
import { formControlTheme } from "./components/formControl";
import { textTheme } from "./components/text";
import { buttonTheme } from "./components/button";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    bg: "white",
    global: (props: StyleFunctionProps) => ({
      "::-webkit-scrollbar": {
        width: "7px",
        height: "7px",
      },
      "::-webkit-scrollbar-track": {
        background: "lightGray",
        cursor: "pointer",
      },
      "::-webkit-scrollbar-thumb": {
        background: "darkGray",
        borderRadius: "9px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "lightGray",
      },
    }),
  },
  breakpoints,
  colors,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Menlo, monospace",
  },
  components: {
    Input: inputTheme,
    FormLabel: labelTheme,
    FormControl: formControlTheme,
    Text: textTheme,
    Button: buttonTheme,
    Checkbox: {
      parts: ["control"],
      baseStyle: {
        control: {
          w: "24px",
          h: "24px",
          borderRadius: "4px",
          border: "2px solid",
          borderColor: "black",
        },
      },
    },
  },
});

export default theme;
