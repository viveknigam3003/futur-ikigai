import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import ListContainer from "../components/List";
import StepLayout from "../components/StepLayout";
import InfoText from "../data/Info";

const Step1 = () => {
  const [lists, setLists] = useState({ love: [], goodAt: [], worldNeeds: [] });

  const handleAdd = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    if (e.key === "Enter") {
      setLists({ ...lists, [key]: [...lists[key], value] });
      e.target.value = "";
    }
  };

  const handleEdits = (e, index) => {
    console.log(e.target.name, e.target.value, index)
  }

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
          listHandler={[handleAdd, handleEdits]}
          placeholder="I love ..."
        />
        <ListContainer
          title="Good At"
          id="goodAt"
          subtitle="What do you believe you're good at?"
          color="yellow"
          list={lists.goodAt}
          listHandler={[handleAdd, handleEdits]}
          placeholder="I am good at ..."
        />
        <ListContainer
          title="World Needs"
          id="worldNeeds"
          subtitle="What are some big problems in the world?"
          color="blue"
          list={lists.worldNeeds}
          listHandler={[handleAdd, handleEdits]}
          placeholder="The world needs ..."
        />
      </Box>
    </StepLayout>
  );
};

export default Step1;
