import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";
import styles from "../styles/Home.module.css";

const Card = ({ title, body }) => {
  return (
    <Box
      m="2"
      p="8"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      borderColor="gray"
      flexBasis="45%"
      border="1px solid gray"
      borderRadius="10px"
      height="xx-small"
      backgroundColor="blue.50"
    >
      <Text color="blue.800" fontSize="4xl" fontWeight="semibold">
        {title} &rarr;
      </Text>
      <Text color="blue.800" fontSize="md" mt="1">
        {body}
      </Text>
    </Box>
  );
};

export default Card;
