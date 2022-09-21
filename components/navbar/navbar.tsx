import { Flex, useColorModeValue, useOutsideClick } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ColorModeButton from "./color-mode-button";
import HamburgerToggleButton from "./hamburger-button";
import Logo from "./logo";
import MenuItems from "./menu-items";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen(!isOpen);
  const onClose = () => setIsOpen(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsAtTop(position == 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useOutsideClick({
    ref: ref,
    enabled: isOpen,
    handler: onClose,
  });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={{ base: 2, sm: 5 }}
      bg={bgColor}
      boxShadow={isAtTop ? "none" : "lg"}
      zIndex="overlay"
      sx={{ position: "fixed", top: "0" }}
      ref={ref}
    >
      <HamburgerToggleButton toggle={toggle} isOpen={isOpen} />
      <Logo />
      <MenuItems isOpen={isOpen} onClose={onClose} />
      <ColorModeButton />
    </Flex>
  );
};

export default Navbar;
