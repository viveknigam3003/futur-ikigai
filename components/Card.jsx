import { Box, Text } from "@chakra-ui/layout";
import React from "react";

const Card = ({ overline, title, body, color, backgroundColor, ...rest }) => {
  return (
    <Box
      m="1rem"
      p="3rem"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      height="inherit"
      flexBasis={{ base: "100%", md: "35%", lg: "40%" }}
      border="1px solid gray"
      borderRadius="10px"
      transition="color 0.15s ease, background-color 0.15s ease"
      _hover={{ color, backgroundColor }}
      cursor="pointer"
    >
      <Text fontSize="sm" fontWeight="medium" textTransform="uppercase">
        {overline}
      </Text>
      <Text fontSize="4xl" fontWeight="semibold" mb="4">
        {title} &rarr;
      </Text>
      <Text fontSize="md" mt="1">
        {body}
      </Text>
    </Box>
  );
};

export default Card;
