import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FiInfo } from "react-icons/fi";

const Info = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const InfoTooltip = ({ onClick, color }) => (
  <Tooltip label="Know more" aria-label="Know-More-Info">
    <IconButton
      icon={<FiInfo />}
      isRound
      size="sm"
      variant="ghost"
      onClick={onClick}
      color={`${color}.500`}
    />
  </Tooltip>
);

export const MoreInfo = ({
  isOpen,
  onClose,
  infoTitle,
  infoContent,
  color,
  hasInput,
  InputProps,
}) => {
 const { name, onKeyDown, placeholder } = InputProps;
  return (
    <Info isOpen={isOpen} onClose={onClose} title={infoTitle}>
      {infoContent.map((item, index) => (
        <Text as={item.type} fontSize="sm" key={`${infoTitle}-${index}`}>
          {item.body}
        </Text>
      ))}
      {hasInput && (
        <Box pt="8">
          <Text fontSize="sm" color={`${color}.500`} pb="2">
            Anything coming to your mind?
          </Text>
          <Input
            borderColor="gray.400"
            name={name}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
          />
        </Box>
      )}
    </Info>
  );
};

MoreInfo.defaultProps = {
  hasInput: false,
  InputProps: {name: "", onKeyDown: () => {}, placeholder: ""},
  infoContent: [
    {
      type: "p",
      body: "It seems this section is empty or we could not fetch data for it.",
    },
  ],
  infoTitle: "No info found",
  color: "gray",
};

export default Info;
