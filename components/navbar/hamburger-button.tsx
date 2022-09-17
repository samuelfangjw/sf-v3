import React from "react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const HamburgerToggleButton = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <Button display={{ base: "block", md: "none" }} onClick={toggle} variant="ghost">
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Button>
  );
};

export default HamburgerToggleButton
