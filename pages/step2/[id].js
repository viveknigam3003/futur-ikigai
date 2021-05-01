import { useColorModeValue } from "@chakra-ui/color-mode";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React, { useEffect, useState } from "react";
import BoxHeader from "../../components/BoxHeader";
import { MoreInfo } from "../../components/Info";
import StepLayout from "../../components/StepLayout";
import IdeaBoxes from "../../data/IdeaBox";
import { COLOR_LIST, IDEAS_KEY } from "../../utils/constants";

const K = IDEAS_KEY;
const Idea = ({ id }) => {
  const initialState = JSON.parse(localStorage.getItem(K));
  const [idea, setIdea] = useState(initialState[id - 1]);
  const combo = idea.combo;
  const IdeaBoxData = IdeaBoxes(combo);

  useEffect(() => console.log(idea), [idea]);

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
      <Editable
        p={{ base: "2" }}
        fontSize="4xl"
        fontWeight="semibold"
        color={useColorModeValue("GrayText", "ActiveCaption")}
        defaultValue={`Idea #${idea.id}`}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        {combo.map((item, index) => (
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

export const getServerSideProps = (context) => {
  const {id} = context.params;
  return {
    props: { id }, // will be passed to the page component as props
  };
}

export default Idea;
