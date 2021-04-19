import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";

const Header = ({ overline, title, subtitle }) => {
  return (
    <Box>
      <Text fontSize="sm">{overline}</Text>
      <Text fontSize="5xl">{title}</Text>
      <Text fontSize="3xl">{subtitle}</Text>
    </Box>
  );
};

export default Header;
