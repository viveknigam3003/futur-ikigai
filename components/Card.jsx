import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

const Card = ({ overline, title, body, color, backgroundColor, path }) => {
  return (
    <Link href={path}>
      <Box
        m="1rem"
        p="3rem"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        height="inherit"
        flexBasis={{ base: "80%", md: "45%", lg: "40%" }}
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
    </Link>
  );
};

export const TextCard = ({ item, ...rest }) => (
  <Box
    p="2"
    mr="2"
    flex="1 1 auto"
    textAlign="left"
    shadow="base"
    borderRadius="8px"
    width="100%"
    {...rest}
  >
    <Text>{item}</Text>
  </Box>
);

export default Card;
