import { useColorModeValue } from "@chakra-ui/color-mode";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import React, { Fragment, useEffect, useState } from "react";
import ActionModal from "../../components/ActionModal";
import IdeaBox from "../../components/IdeaBox";
import StepLayout from "../../components/StepLayout";
import IdeaBoxes from "../../data/IdeaBox";
import { COLOR_LIST, IDEAS_KEY } from "../../utils/constants";
import { useRouter } from "next/router";
import PageNav from "../../components/PageNav";
import analytics from "../../plugins/mixpanel";

const Idea = ({ id }) => {
  const ideas = JSON.parse(localStorage.getItem(IDEAS_KEY));
  const res = ideas.filter((item) => item.id === id)[0];
  const [idea, setIdea] = useState(res);
  const combo = idea.combo;
  const IdeaBoxData = IdeaBoxes(combo);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    analytics.track("User Idea Page Visited");
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const [K, V] = [e.target.name, e.target.value];
    setIdea({ ...idea, [K]: V });
  };

  const handleSubmit = async () => {
    const index = ideas.map((item) => item.id).indexOf(id);
    const nextList = [...ideas];
    nextList.splice(index, 1, idea);
    localStorage.setItem(IDEAS_KEY, JSON.stringify(nextList));
    analytics.track("Idea Edited");
  };

  const handleTextAreaChange = (e) => {
    e.preventDefault();
    const [K, V] = [e.target.name, e.target.value];
    setIdea({ ...idea, idea: { ...idea.idea, [K]: V } });
  };

  const handleDelete = () => {
    const filteredIdeas = ideas.filter((item) => item.id.toString() !== id);
    localStorage.setItem(IDEAS_KEY, JSON.stringify(filteredIdeas));

    onClose();
    router.push("/step2");
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
      menuItems={<MenuItems openRemoveDialog={onOpen} />}
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
      <ActionModal
        title="Delete this idea?"
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleDelete}
        buttonText="Delete Idea"
      >
        Deleting this idea would remove it from this device's storage. This
        action is irreversible.
        <br />
        <br /> Do you wish to continue?
      </ActionModal>
      <PageNav prevProps={{ link: "/step2", text: "Back to all ideas" }} />
    </StepLayout>
  );
};

export const getServerSideProps = (context) => {
  const { id } = context.params;
  return {
    props: { id }, // will be passed to the page component as props
  };
};

const MenuItems = ({ openRemoveDialog }) => (
  <Fragment>
    <MenuItem color="red.400" onClick={openRemoveDialog}>
      Delete Idea
    </MenuItem>
  </Fragment>
);

export default Idea;
