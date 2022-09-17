import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import ColorModeButton from "./color-mode-button";
import HamburgerToggleButton from "./hamburger-button";
import Logo from "./logo";
import MenuItems from "./menu-items";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    >
      <HamburgerToggleButton toggle={toggle} isOpen={isOpen} />
      <Logo />
      <MenuItems isOpen={isOpen} />
      <ColorModeButton />
    </Flex>
  );
};

export default Navbar;
