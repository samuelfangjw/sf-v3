import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Text } from "@chakra-ui/react";
import TextLink from "./text-link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box textAlign="center" position="relative" m="8">
      <Divider />
      <Box mt="4" fontSize="sm">
        <TextLink link="https://github.com/samuelfangjw/sf-v3" isExternal>
          Designed & Built
        </TextLink>
        <Text display="inline"> by Samuel Fang, 2022</Text>
      </Box>
      <Box
        display={{ base: "none", sm: "block" }}
        position="absolute"
        right="0"
        top="0"
        my="1.5"
      >
        <Button variant="ghost" onClick={scrollToTop} aria-label="Back to Top">
          <ArrowUpIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
