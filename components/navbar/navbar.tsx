import { Flex, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ColorModeButton from "./color-mode-button";
import HamburgerToggleButton from "./hamburger-button";
import Logo from "./logo";
import MenuItems from "./menu-items";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isAtTop, setIsAtTop] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsAtTop(position == 0);
  };

  const bgColor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
      bg={bgColor}
      boxShadow={isAtTop ? "none" : "xl"}
      zIndex="overlay"
      sx={{ position: "fixed", top: "0" }}
    >
      <HamburgerToggleButton toggle={toggle} isOpen={isOpen} />
      <Logo />
      <MenuItems isOpen={isOpen} />
      <ColorModeButton />
    </Flex>
  );
};

export default Navbar;
