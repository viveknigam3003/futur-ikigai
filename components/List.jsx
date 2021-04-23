import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import BoxHeader from "./BoxHeader";
import { MoreInfo } from "./Info";
import ListItem from "./ListItem";

const ListContainer = ({
  id,
  color,
  title,
  subtitle,
  list,
  listHandler,
  infoContent,
  infoTitle,
  placeholder,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [handleAdd, handleEdits, handleDelete] = listHandler;

  return (
    <Box
      p="8"
      m="2"
      borderRadius="10px"
      display="flex"
      flexBasis={{ base: "90%", md: "40%" }}
      flexDir="column"
      color={`${color}.600`}
      backgroundColor={`${color}.100`}
      minHeight="50vh"
      aria-label="List Container"
    >
      <BoxHeader
        title={title}
        subtitle={subtitle}
        color={color}
        hasInfo
        onClick={onOpen}
      />

      <VStack>
        {list.map((item, index) => (
          <ListItem
            name={id}
            key={index}
            item={item}
            index={index}
            backgroundColor={useColorModeValue(`${color}.50`, `${color}.500`)}
            color={useColorModeValue(`${color}.600`, `${color}.50`)}
            handleEdits={handleEdits}
            handleDelete={handleDelete}
          />
        ))}
        <Input
          borderColor={`${color}.400`}
          name={id}
          onKeyDown={handleAdd}
          placeholder={placeholder}
        />
      </VStack>
      <MoreInfo
        isOpen={isOpen}
        onClose={onClose}
        infoTitle={infoTitle}
        infoContent={infoContent}
        color={color}
        hasInput
        InputProps={{ name: id, onKeyDown: handleAdd, placeholder }}
      />
      <Box
        display="flex"
        justifyItems="center"
        alignContent="flex-end"
        flexDir="row-reverse"
        pt="4"
      >
        <Text fontSize="xs">Total Items = {list.length}</Text>
      </Box>
    </Box>
  );
};

export default ListContainer;
