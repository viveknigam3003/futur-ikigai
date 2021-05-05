import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { HiLightningBolt } from "react-icons/hi";
import { InfoTooltip } from "./Info";
import TooltipButton from "./TooltipButton";

const BoxHeader = ({
  title,
  subtitle,
  size,
  color,
  hasInfo = false,
  onClick,
  action = { state: false, onClick: () => {}, label: "" },
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
        {action.state && (
          <TooltipButton
            label={action.label}
            icon={<HiLightningBolt />}
            onClick={action.onClick}
          />
        )}
      </Text>
    </Box>
  );
};

BoxHeader.defaultProps = {
  size: { titleSize: "4xl", subtitleSize: "md" },
};

export default BoxHeader;
