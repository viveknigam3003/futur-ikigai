import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import StepLayout from "../components/StepLayout";
import { generateCombo } from "../utils";

const Step2 = () => {
  const lists = JSON.parse(localStorage.getItem("lists"));
  const combos = generateCombo(lists);

  const TextItem = ({ item, ...rest }) => (
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

  const colorList = ["red", "yellow", "blue"]

  return (
    <StepLayout
      pageTitle="STEP 2: Finding Ikigai"
      navTitle="Finding Ikigai"
      navSubtitle="Crafting ideas to find your Ikigai."
      color="orange"
    >
      <Box display="flex" justifyContent="space-evenly" width="100%">
        <VStack>
          {combos.map((item, index) => (
            <TextItem item={item} key={item} color={`${colorList[index]}.800`} backgroundColor={`${colorList[index]}.100`}/>
          ))}
        </VStack>
        
      </Box>
    </StepLayout>
  );
};

export default Step2;
