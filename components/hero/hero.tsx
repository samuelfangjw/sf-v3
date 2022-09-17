import {
  Box,
  Center,
  Flex,
  Highlight,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero = () => {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box w="100vw" h="100vh" bg={bgColor}>
      <Center w="100vw" h="100vh">
        <Flex direction="column">
          <Text fontSize="xl">Hi there &#128075;! I&apos;m</Text>
          <Text fontSize="6xl" fontWeight="bold">
            Samuel Fang,
          </Text>
          <Text>
            <Highlight
              query="software engineer"
              styles={{ px: "2", py: "1", rounded: "full", bg: "orange.100" }}
            >
              a software engineer with a keen interest in software architecture
              and design patterns.
            </Highlight>
          </Text>
        </Flex>
      </Center>
    </Box>
  );
};

export default Hero;
