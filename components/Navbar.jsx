import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, HStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display="flex"
      flexDir="row-reverse"
      width="100%"
      p={{ base: "1rem", md: "1rem 3rem", lg: "1rem 4rem" }}
    >
      <HStack>
        <Tooltip label="Toggle Dark Mode" aria-label="Dark-Mode">
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            variant="ghost"
          />
        </Tooltip>
        <Tooltip label="GitHub Repo" aria-label="GitHub-Icon">
          <IconButton icon={<FaGithub />} variant="ghost" />
        </Tooltip>
      </HStack>
    </Box>
  );
};

export default Navbar;
