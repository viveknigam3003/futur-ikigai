import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import * as React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

const StepLayout = ({
  pageTitle,
  navTitle,
  navSubtitle,
  color,
  children,
  menuItems,
}) => {
  return (
    <React.Fragment>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Meta title={pageTitle} />
        <Navbar menuItems={menuItems}>
          <Box>
            <Text
              fontSize="l"
              fontWeight="semibold"
              color={useColorModeValue(`${color}.500`, `${color}.200`)}
            >
              {navTitle}
            </Text>
            <Text fontSize="sm" color="InactiveCaptionText">
              {navSubtitle}
            </Text>
          </Box>
        </Navbar>
        <Box
          p="5rem 0"
          display="flex"
          flex="1"
          width="100%"
          flexDirection="column"
          alignItems="center"
          aria-label="Layout Children Wrapper"
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default StepLayout;
