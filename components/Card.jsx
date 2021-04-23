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

export default Card;
