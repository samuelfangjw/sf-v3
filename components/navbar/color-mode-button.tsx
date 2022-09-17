import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ColorModeButton;
