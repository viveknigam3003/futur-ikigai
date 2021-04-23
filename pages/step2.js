import { useDisclosure } from "@chakra-ui/hooks";
import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import BoxHeader from "../components/BoxHeader";
import { TextCard } from "../components/Card";
import { MoreInfo } from "../components/Info";
import StepLayout from "../components/StepLayout";
import Hints from "../data/Hints";
import { generateCombo } from "../utils";

const Step2 = () => {
  const lists = JSON.parse(localStorage.getItem("lists"));
  const combos = generateCombo(lists);
  const colorList = ["red", "yellow", "blue"];

  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <TextCard
              item={item}
              key={item}
              color={`${colorList[index]}.800`}
              backgroundColor={`${colorList[index]}.100`}
            />
          ))}
        </VStack>
        <BoxHeader
          title="Tangible"
          subtitle="Anything percieved by physical touch"
          hasInfo
          onClick={onOpen}
        />
        <MoreInfo
          isOpen={isOpen}
          onClose={onClose}
          color="purple"
          infoTitle="Some examples of tangible things are:"
          infoContent={Hints.tangible}
        />
      </Box>
    </StepLayout>
  );
};

export default Step2;
