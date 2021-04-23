import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip
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

export default Info;
