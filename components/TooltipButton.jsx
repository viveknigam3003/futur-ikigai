import { IconButton } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";

const TooltipButton = ({ label = "", icon, onClick, color }) => {
  return (
    <Tooltip label={label} aria-label={`${label.split(" ").join("-")}-button`}>
      <IconButton
        icon={icon}
        isRound
        size="sm"
        variant="ghost"
        onClick={onClick}
        color={`${color}.500`}
      />
    </Tooltip>
  );
};

export default TooltipButton;
