import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { InfoTooltip } from "./Info";

const BoxHeader = ({ title, subtitle, color, hasInfo = false, onClick }) => {
  return (
    <Box mb="8">
      <Text fontSize="4xl" fontWeight="semibold">
        {title}
      </Text>
      <Text color={`${color}.500`} fontSize="md">
        {subtitle}
        {hasInfo && <InfoTooltip onClick={onClick} />}
      </Text>
    </Box>
  );
};

export default BoxHeader;
