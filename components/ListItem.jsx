import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { FiDelete, FiEdit, FiSave } from "react-icons/fi";

const ListItem = ({ item, index, name, handleEdits, ...rest }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [actions, setActions] = useState({ edit: false });

  const handleActions = (e, actionName) => {
    e.preventDefault();
    if (actionName === "EDIT") setActions({ ...actions, edit: !actions.edit });
  };

  const TextItem = () => (
    <Box
      p="2"
      mr="2"
      flex="1 1 auto"
      textAlign="left"
      shadow="base"
      borderRadius="8px"
      width="100%"
      onClick={() => setShowOptions(!showOptions)}
      {...rest}
    >
      <Text>{item}</Text>
    </Box>
  );

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      cursor="pointer"
    >
      {actions.edit ? (
        <Input
          flex="1 1 auto"
          mr="2"
          borderColor="gray.400"
          name={name}
          onKeyDown={(e) => handleEdits(e, index)}
          defaultValue={item}
        />
      ) : (
        <TextItem />
      )}
      {showOptions && (
        <ButtonGroup>
          <IconButton
            color="blue.500"
            name="edit"
            aria-label="Edit Item"
            icon={actions.edit ? <FiSave /> : <FiEdit />}
            onClick={(e) => handleActions(e, "EDIT")}
          />
          <IconButton
            name="delete"
            color="red.600"
            aria-label="Delete Item"
            icon={<FiDelete />}
          />
        </ButtonGroup>
      )}
    </Box>
  );
};

export default ListItem;