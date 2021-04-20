import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";

const Card = ({ overline, title, body, color, backgroundColor, path }) => {
  return (
    <Box
      as="a"
      href={path}
      m="1rem"
      p="3rem"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      height="inherit"
      flexBasis={{ base: "100%", md: "35%", lg: "40%" }}
      shadow={useColorModeValue("md", "dark-lg")}
      borderRadius="10px"
      transition="color 0.15s ease, background-color 0.15s ease, shadow 0.15s ease"
      _hover={{ color, backgroundColor, shadow: "lg" }}
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
