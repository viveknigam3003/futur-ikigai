import { useColorModeValue } from "@chakra-ui/color-mode";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import BoxHeader from "../../../components/BoxHeader";
import { MoreInfo } from "../../../components/Info";
import StepLayout from "../../../components/StepLayout";
import { SERVER } from "../../../config";
import IdeaBoxes from "../../../data/IdeaBox";
import { COLOR_LIST } from "../../../utils/constants";

const Idea = ({ data }) => {
  const combos = data.combo;
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
      <Editable
        p={{ base: "2" }}
        fontSize="4xl"
        fontWeight="semibold"
        color={useColorModeValue("GrayText", "ActiveCaption")}
        defaultValue={`Idea #${data.id}`}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
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

export const getStaticProps = async (context) => {
  const res = await fetch(`${SERVER}/api/ideas/${context.params.id}`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${SERVER}/api/ideas`);

  const data  = await res.json();

  const ids = data.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Idea;
