import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import * as React from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";

const StepLayout = ({ pageTitle, navTitle, navSubtitle, color, children }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Meta title={pageTitle} />
      <Navbar>
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
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    </Box>
  );
};

export default StepLayout;