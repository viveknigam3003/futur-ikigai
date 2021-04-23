import { useDisclosure } from "@chakra-ui/hooks";
import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import BoxHeader from "../components/BoxHeader";
import { TextCard } from "../components/Card";
import { MoreInfo } from "../components/Info";
import StepLayout from "../components/StepLayout";
import Hints from "../data/Hints";
import { generateCombo } from "../utils";
import { COLOR_LIST, LIST_KEY } from "../utils/constants";

const Step2 = () => {
  const lists = JSON.parse(localStorage.getItem(LIST_KEY));
  const combos = generateCombo(lists);

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
              color={`${COLOR_LIST[index]}.800`}
              backgroundColor={`${COLOR_LIST[index]}.100`}
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
