import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import StepLayout from "../../components/StepLayout";
import { generateCombo } from "../../utils";
import { IDEAS_KEY, LIST_KEY } from "../../utils/constants";

const K = IDEAS_KEY; //storage-key-ideas
const L = LIST_KEY;

const Step2 = () => {
  if (localStorage.getItem(K) === null)
    localStorage.setItem(K, JSON.stringify([]));
  const [ideas, setIdeas] = useState(JSON.parse(localStorage.getItem(K)));
  const lists = JSON.parse(localStorage.getItem(L));

  const handleClick = () => {
    const index = ideas.length + 1;
    const IdeaObject = {
      id: index,
      name: `Idea #${index}`,
      combo: generateCombo(lists),
      idea: { tangible: "", digital: "", service: "" },
    };
    setIdeas([...ideas, IdeaObject]);
  };

  useEffect(() => localStorage.setItem(K, JSON.stringify(ideas)), [ideas]);

  return (
    <StepLayout
      pageTitle="STEP 2: Finding Ikigai"
      navTitle="Finding Ikigai"
      navSubtitle="Crafting ideas to find your Ikigai."
      color="orange"
      aria-label="Step Layout"
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
            {ideas.map((item) => (
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
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.combo.join(", ")}</Td>
                </Tr>
              </Link>
            ))}
          </Tbody>
        </Table>
      </Box>
    </StepLayout>
  );
};

export default Step2;
