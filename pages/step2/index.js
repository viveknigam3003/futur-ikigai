import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useToast } from "@chakra-ui/toast";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import ActionModal from "../../components/ActionModal";
import PageNav from "../../components/PageNav";
import StepLayout from "../../components/StepLayout";
import analytics from "../../plugins/mixpanel";
import { generateCombo, getUniqueID } from "../../utils";
import { IDEAS_KEY, LIST_KEY } from "../../utils/constants";

const K = IDEAS_KEY; //storage-key-ideas
const L = LIST_KEY;

const Step2 = () => {
  if (localStorage.getItem(K) === null)
    localStorage.setItem(K, JSON.stringify([]));
  const [ideas, setIdeas] = useState(JSON.parse(localStorage.getItem(K)));
  const lists = JSON.parse(localStorage.getItem(L));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    analytics.track("Ideas Page Visit");
  }, []);

  const handleClick = () => {
    const id = getUniqueID();
    const IdeaObject = {
      id: id,
      name: `Untitled`,
      combo: generateCombo(lists),
      idea: { tangible: "", digital: "", service: "" },
    };
    setIdeas([...ideas, IdeaObject]);
    analytics.track("Idea Created");
    toast({
      title: "Combination Generated!",
      description: "Click on 'Untitled' to start writing your ideas",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleReset = () => {
    localStorage.setItem(K, JSON.stringify([]));
    setIdeas(JSON.parse(localStorage.getItem(K)));

    toast({
      title: "Ideas Cleared!",
      description: "You can now start over successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  useEffect(() => localStorage.setItem(K, JSON.stringify(ideas)), [ideas]);

  return (
    <StepLayout
      pageTitle="STEP 2: Finding Ikigai"
      navTitle="Finding Ikigai"
      navSubtitle="Crafting ideas to find your Ikigai."
      color="orange"
      aria-label="Step Layout"
      menuItems={<MenuItems openClearListDialog={onOpen} />}
    >
      <Box px={{ base: "8", md: "12", lg: "16" }} w="100%">
        <Text pb="4" fontSize="4xl" fontWeight="semibold">
          Let's generate some ideas
        </Text>
        <Text
          width={{ lg: "2xl" }}
          fontSize={{ base: "lg", lg: "xl" }}
          color="GrayText"
          pb="4"
        >
          Now in this step we would generate you a random combination of one
          thing you love, one you're good at, and one the world needs
        </Text>
        <Button my="2" colorScheme="orange" onClick={handleClick}>
          Generate New Combination
        </Button>
      </Box>
      <Box width="100%" px={{ base: "8", md: "12", lg: "16" }} py="8">
        <Text
          fontSize="2xl"
          color={useColorModeValue("orange.500", "orange.200")}
          pb="4"
        >
          Your Idea List
        </Text>
        <Table variant="simple" size="md" w={{ lg: "2xl" }}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Using</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ideas.map((item, index) => (
              <Link key={item.id} href="/step2/[id]" as={`/step2/${item.id}`}>
                <Tr
                  cursor="pointer"
                  _hover={{
                    backgroundColor: useColorModeValue(
                      "gray.200",
                      "whiteAlpha.100"
                    ),
                  }}
                >
                  <Td>{index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.combo.join(", ")}</Td>
                </Tr>
              </Link>
            ))}
          </Tbody>
        </Table>
      </Box>
      <ActionModal
        title="Are you sure you want to clear all ideas?"
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleReset}
        buttonText="Clear Ideas"
      >
        Clearing the ideas will remove all the data for this page. This action
        is irreversible.
        <br />
        <br /> Do you wish to continue?
      </ActionModal>
      <PageNav
        prevProps={{ link: "/step1", color: "blue", text: "Back to Step 1" }}
      />
    </StepLayout>
  );
};

const MenuItems = ({ openClearListDialog }) => (
  <Fragment>
    <MenuItem
      as="a"
      href="https://youtu.be/BAzs3amtEFA?t=54m33s"
      target="_blank"
    >
      Know More
    </MenuItem>
    <MenuItem onClick={openClearListDialog}>Clear Ideas</MenuItem>
  </Fragment>
);

export default Step2;
