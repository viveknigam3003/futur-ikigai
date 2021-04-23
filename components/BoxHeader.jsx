import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { InfoTooltip } from "./Info";

const BoxHeader = ({
  title,
  subtitle,
  size,
  color,
  hasInfo = false,
  onClick,
  ...rest
}) => {
  const { titleSize, subtitleSize } = size;
  return (
    <Box mb="8" {...rest}>
      <Text fontSize={titleSize} fontWeight="semibold">
        {title}
      </Text>
      <Text color={`${color}.500`} fontSize={subtitleSize}>
        {subtitle}
        {hasInfo && <InfoTooltip onClick={onClick} />}
      </Text>
    </Box>
  );
};

BoxHeader.defaultProps = {
  size: { titleSize: "4xl", subtitleSize: "md" },
};

export default BoxHeader;
