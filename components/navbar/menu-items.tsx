import { Box, Stack } from "@chakra-ui/react";
import ButtonLink from "../button-link";

const MenuItems = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      order={{ base: "1", md: "0" }}
    >
      <Stack
        spacing={4}
        align="center"
        justify={{ base: "center", sm: "space-between", md: "flex-end" }}
        direction={{ base: "column", sm: "row" }}
        pt={{ base: 4, md: 0 }}
      >
        <ButtonLink
          link="#about"
          onClick={onClose}
          variant="ghost"
          width="100%"
        >
          About
        </ButtonLink>
        <ButtonLink link="#work" onClick={onClose} variant="ghost" width="100%">
          Work
        </ButtonLink>
        <ButtonLink
          link="#projects"
          onClick={onClose}
          variant="ghost"
          width="100%"
        >
          Projects
        </ButtonLink>
        <ButtonLink
          link="#contact"
          onClick={onClose}
          variant="ghost"
          width="100%"
        >
          Contact
        </ButtonLink>
      </Stack>
    </Box>
  );
};

export default MenuItems;
