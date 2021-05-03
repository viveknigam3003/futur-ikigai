import ProgressBar from "@badrap/bar-of-progress";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/manrope";
import { DefaultSeo } from "next-seo";
import Router from "next/router";
import * as React from "react";
import SEO from "../config/next-seo.config";
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
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
