import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";

const Header = ({ overline, title, subtitle }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Text fontSize="sm" fontWeight="bold" align="center" color="blue">
        {overline}
      </Text>
      <Text fontSize="6xl" fontWeight="semibold">
        {title}
      </Text>
      <Text fontSize="3xl">{subtitle}</Text>
    </Box>
  );
};

export default Header;
