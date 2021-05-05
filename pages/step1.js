import { useDisclosure } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { useToast } from "@chakra-ui/toast";
import React, { Fragment, useEffect, useState } from "react";
import ActionModal from "../components/ActionModal";
import ListContainer from "../components/List";
import PageNav from "../components/PageNav";
import StepLayout from "../components/StepLayout";
import InfoText from "../data/Info";
import analytics from "../plugins/mixpanel";
import { generateWorldNeeds } from "../utils";
import { LIST_KEY } from "../utils/constants";

const K = LIST_KEY; //storage-key

const Step1 = () => {
  const initState = JSON.stringify({ love: [], goodAt: [], worldNeeds: [] });
  if (localStorage.getItem(K) === null) localStorage.setItem(K, initState);

  const [lists, setLists] = useState(JSON.parse(localStorage.getItem(K)));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isActionModalOpen,
    onOpen: actionModalOpen,
    onClose: actionModalClose,
  } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    analytics.track("List Page Visit");
  }, []);

  const success = (title) =>
    toast({
      title,
      variant: "subtle",
      status: "success",
      duration: 1000,
      isClosable: true,
    });

  const handleAdd = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (e.key === "Enter") {
      setLists({ ...lists, [key]: [...lists[key], value] });
      e.target.value = "";
      success("Item Added");
      analytics.track("Item Created");
    }
  };

  const handleEdits = (e, index) => {
    const key = e.target.name;
    const value = e.target.value;
    if (e.key === "Enter") {
      const preList = lists[key].slice(0, index);
      const postList = lists[key].slice(index + 1);
      setLists({ ...lists, [key]: [...preList, value, ...postList] });
      success("Item Edited");
      return true;
    }
  };

  const handleDelete = (key, index) => {
    const preList = lists[key].slice(0, index);
    const postList = lists[key].slice(index + 1);
    setLists({ ...lists, [key]: [...preList, ...postList] });
    success("Item Deleted");
    analytics.track("Item Deleted");
  };

  const handleReset = () => {
    localStorage.setItem(K, initState);
    setLists(JSON.parse(localStorage.getItem(K)));

    toast({
      title: "Lists Cleared!",
      description: "You can now start over successfully",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    onClose();
  };

  const handleGenerate = () => {
    setLists({ ...lists, worldNeeds: generateWorldNeeds() });
    actionModalClose();
    toast({
      title: "Auto-Generated List!",
      description: "You can tap on any item to edit",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  useEffect(() => localStorage.setItem(K, JSON.stringify(lists)), [lists]);

  return (
    <StepLayout
      pageTitle="STEP 1: Looking Inside"
      navTitle="Looking Inside"
      navSubtitle="What you love, what you're good at, and what the world needs?"
      color="blue"
      menuItems={<MenuItems openClearListDialog={onOpen} />}
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-evenly"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        aria-label="Layout Child"
      >
        <ListContainer
          title="Love"
          id="love"
          subtitle="List down at least 12 things you love"
          color="red"
          infoTitle="What you love 💝"
          infoContent={InfoText.love}
          list={lists.love}
          listHandler={[handleAdd, handleEdits, handleDelete]}
          placeholder="I love ..."
        />
        <ListContainer
          title="Good At"
          id="goodAt"
          subtitle="What do you believe you're good at?"
          color="yellow"
          infoTitle="What you're good at 🌟"
          infoContent={InfoText.goodAt}
          list={lists.goodAt}
          listHandler={[handleAdd, handleEdits, handleDelete]}
          placeholder="I am good at ..."
        />
        <ListContainer
          title="World Needs"
          id="worldNeeds"
          subtitle="What are some big problems in the world?"
          color="blue"
          infoTitle="What the world needs 🌎"
          infoContent={InfoText.worldNeeds}
          list={lists.worldNeeds}
          listHandler={[handleAdd, handleEdits, handleDelete]}
          placeholder="The world needs ..."
          action={{
            label: "Auto-Generate List",
            state: true,
            onClick: () =>
              lists.worldNeeds.length ? actionModalOpen() : handleGenerate(),
          }}
        />
      </Box>
      <ActionModal
        title="Are you sure you want to clear lists?"
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleReset}
        buttonText="Clear lists"
      >
        Clearing the lists will remove all the data for this page. This action
        is irreversible.
        <br />
        <br /> Do you wish to continue?
      </ActionModal>
      <ActionModal
        title="Confirm Action"
        isOpen={isActionModalOpen}
        onClose={actionModalClose}
        onClick={handleGenerate}
        buttonText="Generate List"
        color="green"
      >
        This action will clear your current list and auto-generate a new one.
        You can click on any item to edit or delete it later.
        <br />
        <br /> Do you wish to continue?
      </ActionModal>
      <PageNav
        prevProps={{ link: "/", text: "Back to Home" }}
        nextProps={{
          link: "/step2",
          color: "orange",
          text: "Next Step: Finding Ikigai",
        }}
      />
    </StepLayout>
  );
};

const MenuItems = ({ openClearListDialog }) => (
  <Fragment>
    <MenuItem
      as="a"
      href="https://youtu.be/BAzs3amtEFA?t=8m51s"
      target="_blank"
    >
      Know More
    </MenuItem>
    <MenuItem onClick={openClearListDialog}>Clear Lists</MenuItem>
  </Fragment>
);

export default Step1;
