import { Avatar } from "@chakra-ui/avatar";
import { Box, HStack, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { GrTwitter } from "react-icons/gr";

const Author = ({ name, image, twitter }) => (
  <Box display="flex" alignItems="center" aria-label="Author">
    <Avatar m="5" mx="1" size="md" name={name} src={image}></Avatar>
    <Box p="5" px="2" aria-label="Author-Text">
      <Text fontSize="xs" fontWeight="bold" color="blue.300">
        Developed By
      </Text>
      <HStack>
        <Text fontSize="l" fontWeight="medium" color="blue.100">
          {name}
        </Text>
        <Link
          color="twitter.400"
          isExternal
          href={`https://twitter.com/${twitter}`}
        >
          <GrTwitter />
        </Link>
      </HStack>
    </Box>
  </Box>
);

export default Author;
