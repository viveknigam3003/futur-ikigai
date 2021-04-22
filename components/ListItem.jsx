import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const ListItem = ({
  item,
  index,
  name,
  handleEdits,
  handleDelete,
  ...rest
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleActions = (e, index) => {
    const res = handleEdits(e, index);
    if (res) {
      setEdit(false);
      setShowOptions(false);
    }
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
      {edit ? (
        <Input
          flex="1 1 auto"
          mr="2"
          borderColor="gray.400"
          name={name}
          onKeyDown={(e) => handleActions(e, index)}
          defaultValue={item}
        />
      ) : (
        <TextItem />
      )}
      {showOptions && (
        <ButtonGroup>
          <IconButton
            colorScheme="blue"
            name="edit"
            aria-label="Edit Item"
            icon={edit ? <GrFormClose /> : <FiEdit />}
            onClick={() => setEdit(!edit)}
          />
          <IconButton
            name="delete"
            colorScheme="red"
            aria-label="Delete Item"
            icon={<RiDeleteBin6Line />}
            onClick={() => handleDelete(name, index)}
          />
        </ButtonGroup>
      )}
    </Box>
  );
};

export default ListItem;
