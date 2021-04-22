import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { createContext, useState } from "react";
import ListContainer from "../components/List";
import StepLayout from "../components/StepLayout";
import InfoText from "../data/Info";

export const ActionContext = createContext();

const Step1 = () => {
  const [lists, setLists] = useState({ love: [], goodAt: [], worldNeeds: [] });
  const toast = useToast();

  const success = (title) => toast({
    title,
    variant: "subtle",
    status: "success",
    duration: 1000,
    isClosable: true
  });

  const handleAdd = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (e.key === "Enter") {
      setLists({ ...lists, [key]: [...lists[key], value] });
      e.target.value = "";
      success("Item Added");
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
  };

  return (
    <StepLayout
      pageTitle="STEP 1: Looking Inside"
      navTitle="Looking Inside"
      navSubtitle="What you love, what you're good at, and what the world needs?"
      color="blue"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-evenly"
        flexBasis="10%"
        flexWrap={{ base: "wrap", md: "nowrap" }}
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
          list={lists.goodAt}
          listHandler={[handleAdd, handleEdits, handleDelete]}
          placeholder="I am good at ..."
        />
        <ListContainer
          title="World Needs"
          id="worldNeeds"
          subtitle="What are some big problems in the world?"
          color="blue"
          list={lists.worldNeeds}
          listHandler={[handleAdd, handleEdits, handleDelete]}
          placeholder="The world needs ..."
        />
      </Box>
    </StepLayout>
  );
};

export default Step1;
