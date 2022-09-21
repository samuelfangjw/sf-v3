import { Box, Divider, Text } from "@chakra-ui/react";
import TextLink from "./text-link";

const Footer = () => {
  return (
    <Box textAlign="center" m="8">
      <Divider />
      <Box mt="4" fontSize="sm">
        <TextLink link="https://github.com/samuelfangjw/sf-v3">
          Designed & Built
        </TextLink>
        <Text display="inline"> by Samuel Fang, 2022</Text>
      </Box>
    </Box>
  );
};

export default Footer;
