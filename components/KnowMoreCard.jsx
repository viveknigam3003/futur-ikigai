import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const KnowMoreCard = () => {
  return (
    <Box
      as="a"
      href="https://www.youtube.com/watch?v=BAzs3amtEFA"
      target="_blank"
      rel="help"
      my="10"
      mx="1rem"
      flexBasis={{ base: "80%", md: "45%", lg: "40%" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      maxWidth="32rem"
      borderRadius="10px"
      shadow={useColorModeValue("md", "lg")}
      transition="color 0.15s ease, background-color 0.15s ease"
      _hover={{ color: "red.500", backgroundColor: "red.50" }}
    >
      <FaYoutube size="4rem" color="red" style={{ margin: "1rem" }} />
      <VStack p="2rem 2rem 2rem 1rem" alignItems="flex-start">
        <Text fontSize="xl" fontWeight="semibold">
          Know More: Ikigai Workshop | The Futur
        </Text>
        <Text fontSize="md" color="InactiveCaptionText">
          Build A Business That Combines What You're Good At, Love, &amp; The
          World Needs
        </Text>
      </VStack>
    </Box>
  );
};

export default KnowMoreCard;
