import { useColorModeValue } from "@chakra-ui/color-mode";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { Box, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import IdeaBox from "../../components/IdeaBox";
import StepLayout from "../../components/StepLayout";
import IdeaBoxes from "../../data/IdeaBox";
import { COLOR_LIST, IDEAS_KEY } from "../../utils/constants";

const Idea = ({ id }) => {
  const initialState = JSON.parse(localStorage.getItem(IDEAS_KEY));
  const [idea, setIdea] = useState(initialState[id - 1]);
  const combo = idea.combo;
  const IdeaBoxData = IdeaBoxes(combo);

  const handleChange = (e) => {
    e.preventDefault();
    const [K, V] = [e.target.name, e.target.value];
    setIdea({ ...idea, [K]: V });
  };

  const handleSubmit = async () => {
    const ideas = JSON.parse(localStorage.getItem(IDEAS_KEY));
    const preList = ideas.slice(0, id - 1);
    const postList = ideas.slice(id);
    localStorage.setItem(
      IDEAS_KEY,
      JSON.stringify([...preList, idea, ...postList])
    );
  };

  const handleTextAreaChange = (e) => {
    e.preventDefault();
    const [K, V] = [e.target.name, e.target.value];
    setIdea({ ...idea, idea: { ...idea.idea, [K]: V } });
  };

  useEffect(() => {
    const timeout = setTimeout(() => handleSubmit(), 3000);

    return () => clearTimeout(timeout);
  }, [idea]);

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
        value={idea.name}
        onSubmit={handleSubmit}
      >
        <EditablePreview />
        <EditableInput name="name" onChange={handleChange} />
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
            name={item.title.toLowerCase()}
            value={idea.idea[item.title.toLowerCase()]}
            onChange={handleTextAreaChange}
          />
        ))}
      </Box>
    </StepLayout>
  );
};

export const getServerSideProps = (context) => {
  const { id } = context.params;
  return {
    props: { id }, // will be passed to the page component as props
  };
};

export default Idea;
