import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/manrope";
import * as React from "react";
import "../styles/globals.css";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
