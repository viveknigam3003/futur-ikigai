import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { FiInfo } from "react-icons/fi";
import Info from "./Info";

const ListContainer = ({
  id,
  color,
  title,
  subtitle,
  list,
  listHandler,
  infoContent = [
    {
      type: "p",
      body: "It seems this section is empty or we could not fetch data for it.",
    },
  ],
  infoTitle = "No info found",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p="8"
      m="2"
      borderRadius="10px"
      display="flex"
      flexBasis={{ base: "auto", lg: "40%" }}
      flexDir="column"
      color={`${color}.600`}
      backgroundColor={`${color}.100`}
      minHeight="50vh"
    >
      <Box mb="8">
        <Text fontSize="4xl" fontWeight="semibold">
          {title}
        </Text>
        <Text color={`${color}.400`} fontSize="md">
          {subtitle}
          <Tooltip label="Know more" aria-label="Know-More-Info">
            <IconButton
              icon={<FiInfo />}
              isRound
              size="sm"
              variant="ghost"
              onClick={onOpen}
              color={`${color}.400`}
            />
          </Tooltip>
        </Text>
      </Box>
      <VStack>
        {list.map((item, index) => (
          <Box
            key={index}
            textAlign="left"
            p="2"
            backgroundColor={`${color}.50`}
            shadow="base"
            borderRadius="8px"
            width="100%"
          >
            <Text>{item}</Text>
          </Box>
        ))}
        <Input borderColor={`${color}.400`} name={id} onKeyDown={listHandler} />
      </VStack>
      <Info isOpen={isOpen} onClose={onClose} title={infoTitle}>
        {infoContent.map((item, index) => (
          <Text as={item.type} fontSize="sm" key={`${infoTitle}-${index}`}>
            {item.body}
          </Text>
        ))}
      </Info>
    </Box>
  );
};

export default ListContainer;
