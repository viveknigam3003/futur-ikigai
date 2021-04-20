import { Input } from "@chakra-ui/input";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const ListContainer = ({ color, title, subtitle, list }) => {
  return (
    <Box
      p="8"
      m="2"
      borderRadius="10px"
      display="flex"
      flexBasis={{ base: "auto", lg: "40%" }}
      flexDir="column"
      color={`${color}.600`}
      backgroundColor={`${color}.100`}
      minHeight="50vh"
    >
      <Box mb="8">
        <Text fontSize="4xl" fontWeight="semibold">
          {title}
        </Text>
        <Text color={`${color}.400`} fontSize="md">
          {subtitle}
        </Text>
      </Box>
      <VStack>
        <Input borderColor={`${color}.400`} />
      </VStack>
    </Box>
  );
};

export default ListContainer;
