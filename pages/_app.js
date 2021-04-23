import ProgressBar from "@badrap/bar-of-progress";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/manrope";
import Router from "next/router";
import * as React from "react";
import "../styles/globals.css";
import theme from "../styles/theme";

const progress = new ProgressBar({
  size: 4,
  color: theme.colors.blue[300],
  className: { zIndex: 50 },
  delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
