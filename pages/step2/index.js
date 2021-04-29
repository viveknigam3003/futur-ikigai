import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import StepLayout from "../../components/StepLayout";

const Step2 = () => {
  return (
    <StepLayout
      pageTitle="STEP 2: Finding Ikigai"
      navTitle="Finding Ikigai"
      navSubtitle="Crafting ideas to find your Ikigai."
      color="orange"
      aria-label="Step Layout"
    >
      <Box px={{ base: "8", md: "12", lg: "16" }} w="100%">
        <Text pb="4" fontSize="4xl" fontWeight="semibold">
          Let's generate some ideas
        </Text>
        <Text
          width={{ lg: "2xl" }}
          fontSize={{ base: "lg", lg: "xl" }}
          color="GrayText"
        >
          Now in this step we would generate you a random combination of one
          thing you love, one you're good at, and one the world needs
        </Text>
      </Box>
      <Box>
        <Text fontSize="2xl" color="orange">Idea List</Text>
      </Box>
    </StepLayout>
  );
};

export default Step2;
