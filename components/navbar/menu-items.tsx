import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./menu-item";

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
        <MenuItem to="#about" onClick={onClose}>About</MenuItem>
        <MenuItem to="#work" onClick={onClose}>Work</MenuItem>
        <MenuItem to="#projects" onClick={onClose}>Projects</MenuItem>
        <MenuItem to="#contact" onClick={onClose}>Contact</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuItems;
