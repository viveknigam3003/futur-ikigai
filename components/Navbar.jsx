import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, HStack } from "@chakra-ui/layout";
import { MenuButton } from "@chakra-ui/menu";
import { MenuList } from "@chakra-ui/menu";
import { Menu } from "@chakra-ui/menu";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { BsGearFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { TwitterShareButton } from "react-twitter-embed";

const Navbar = ({ children, menuItems, navButtons }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      display="flex"
      flexDir="row-reverse"
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      width="100%"
      p={{ base: "2rem 1.5rem 1rem 1.5rem", md: "1rem 3rem", lg: "1rem 4rem" }}
    >
      <HStack>
        {navButtons}

        <Tooltip label="Toggle Dark Mode" aria-label="Dark-Mode">
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            variant="ghost"
          />
        </Tooltip>
        <Menu>
          <MenuButton as={IconButton} icon={<BsGearFill />} variant="ghost" />
          <MenuList>{menuItems}</MenuList>
        </Menu>
      </HStack>

      {children}
    </Box>
  );
};

export default Navbar;
