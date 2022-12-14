import {
  Box,
  Center,
  Highlight,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const highlightColor = useColorModeValue("orange.400", "orange.300");

  return (
    <Box w="100vw" h="100vh" bg={bgColor}>
      <Center w="100vw" h="100vh">
        <Stack
          justifyContent="center"
          marginX={{ base: "8", sm: "16", md: "32" }}
        >
          <Text fontSize="xl">Hi there &#128075;! I&apos;m</Text>
          <Text fontSize={{ base: "5xl", sm: "6xl" }} fontWeight="bold">
            Samuel Fang,
          </Text>
          <Text>
            a{" "}
            <Highlight
              query="software engineer"
              styles={{ px: "2", py: "1", rounded: "full", bg: highlightColor }}
            >
              software engineer
            </Highlight>{" "}
            with a keen interest in software engineering principles,
            architecture and design patterns.
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Hero;
