import { Box } from "@chakra-ui/layout";
import React from "react";
import ListContainer from "../components/List";
import StepLayout from "../components/StepLayout";
import InfoText from "../data/Info";

const Step1 = () => {
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
          subtitle="List down at least 12 things you love"
          color="red"
          infoTitle="What you love 💝"
          infoContent={InfoText.love}
        />
        <ListContainer
          title="Good At"
          subtitle="What do you believe you're good at?"
          color="yellow"
        />
        <ListContainer
          title="World Needs"
          subtitle="What are some big problems in the world?"
          color="blue"
        />
      </Box>
    </StepLayout>
  );
};

export default Step1;
