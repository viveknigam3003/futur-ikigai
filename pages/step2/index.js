import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import BoxHeader from "../../components/BoxHeader";
import { MoreInfo } from "../../components/Info";
import StepLayout from "../../components/StepLayout";
import IdeaBoxes from "../../data/IdeaBox";
import { generateCombo } from "../../utils";
import { COLOR_LIST, LIST_KEY } from "../../utils/constants";

const Step2 = () => {
  const lists = JSON.parse(localStorage.getItem(LIST_KEY));
  const combos = generateCombo(lists);

  const IdeaBoxData = IdeaBoxes(combos);

  const IdeaBox = ({
    title,
    subtitle,
    infoTitle,
    infoContent,
    placeholder,
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box p="2" m="4" flex="1 1 50%">
        <BoxHeader
          mb="2"
          title={title}
          subtitle={subtitle}
          hasInfo
          onClick={onOpen}
          size={{ titleSize: "2xl", subtitleSize: "sm" }}
        />
        <MoreInfo
          isOpen={isOpen}
          onClose={onClose}
          color="purple"
          infoTitle={infoTitle}
          infoContent={infoContent}
        />
        <Textarea borderRadius="10px" size="sm" placeholder={placeholder} />
      </Box>
    );
  };

  return (
    <StepLayout
      pageTitle="STEP 2: Finding Ikigai"
      navTitle="Finding Ikigai"
      navSubtitle="Crafting ideas to find your Ikigai."
      color="orange"
      aria-label="Step Layout"
    >
      <Box display="flex" flexDir={{base: "column", lg: "row"}} flexWrap={{base: "wrap", lg: "nowrap"}}>
        {combos.map((item, index) => (
          <Text
            key={index}
            flex="1 1 auto"
            m="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="10px"
            color={`${COLOR_LIST[index]}.800`}
            bg={`${COLOR_LIST[index]}.100`}
            width="xs"
            minHeight="16"
          >
            {item}
          </Text>
        ))}
      </Box>
      <Box
        p={{ base: "0", lg: "2rem" }}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-evenly"
        width="100%"
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        {IdeaBoxData.map((item) => (
          <IdeaBox
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            infoTitle={item.infoTitle}
            infoContent={item.infoContent}
            placeholder={item.placeholder}
          />
        ))}
      </Box>
    </StepLayout>
  );
};

export default Step2;
