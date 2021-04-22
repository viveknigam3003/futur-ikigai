import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import Info from "./Info";
import ListItem from "./ListItem";

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
  placeholder,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [handleAdd, handleEdits] = listHandler;

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
        <Text color={`${color}.500`} fontSize="md">
          {subtitle}
          <Tooltip label="Know more" aria-label="Know-More-Info">
            <IconButton
              icon={<FiInfo />}
              isRound
              size="sm"
              variant="ghost"
              onClick={onOpen}
              color={`${color}.500`}
            />
          </Tooltip>
        </Text>
      </Box>
      <VStack>
        {list.map((item, index) => (
          <ListItem
            name={id}
            key={index}
            item={item}
            index={index}
            backgroundColor={useColorModeValue(`${color}.50`, `${color}.500`)}
            color={useColorModeValue(`${color}.600` ,`${color}.50`)}
            handleEdits={handleEdits}
          />
        ))}
        <Input
          borderColor={`${color}.400`}
          name={id}
          onKeyDown={handleAdd}
          placeholder={placeholder}
        />
      </VStack>
      <Info isOpen={isOpen} onClose={onClose} title={infoTitle}>
        {infoContent.map((item, index) => (
          <Text as={item.type} fontSize="sm" key={`${infoTitle}-${index}`}>
            {item.body}
          </Text>
        ))}
        <Box pt="8">
          <Text fontSize="sm" color={`${color}.500`} pb="2">
            Anything coming to your mind?
          </Text>
          <Input
            borderColor="gray.400"
            name={id}
            onKeyDown={handleAdd}
            placeholder={placeholder}
          />
        </Box>
      </Info>
    </Box>
  );
};

export default ListContainer;
