import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    "html, body": {
      background: mode("gray.50", "gray.800")(props), //mode(light mode color, dark mode color)
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
