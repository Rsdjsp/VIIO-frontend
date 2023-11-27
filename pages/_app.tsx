import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import "styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
