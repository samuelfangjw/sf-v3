import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./menu-item";

const MenuItems = ({ isOpen }: { isOpen: boolean }) => {
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
        pt={{ base: 4, md: 0}}
      >
        <MenuItem to="/">Link 1</MenuItem>
        <MenuItem to="/">Link 2</MenuItem>
        <MenuItem to="/">Link 3</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuItems;
