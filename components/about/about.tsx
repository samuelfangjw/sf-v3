import {
  Box,
  Grid,
  GridItem,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Section from "../section";
import AboutPhoto from "./photo";

const About = () => {
  const color = useColorModeValue("orange.400", "orange.300");
  const tagsArr = [
    "Go",
    "Java",
    "Typescript",
    "PostgreSQL",
    "MongoDB",
    "Nuxt.js",
    "Angular",
    "Kubernetes",
    "RabbitMQ",
    "Redis",
  ];
  const tags = tagsArr.map((val, idx) => (
    <Tag key={idx} margin={1}>
      {val}
    </Tag>
  ));

  return (
    <Section id="about" title="About Me">
      <Grid templateColumns={{ base: "none", md: "1fr 1fr" }} gap={4}>
        <GridItem>
          <Stack spacing={4} p="8">
            <Text>
              Hello! I&apos;m Samuel, a Software Engineer with a passion for
              solving problems with technology. I also have a keen interest in
              software engineering principles, architecture and design patterns
              and figuring out how these can be applied to create more reliable,
              extensible and maintainable software!
            </Text>
            <Text>
              I&apos;m currently working as a full stack developer (part time)
              at{" "}
              <NextLink href="https://www.voltality.io" passHref>
                <Link color={color} fontWeight="bold">
                  Voltality
                </Link>
              </NextLink>
              . I&apos;m also a final year student at the National University of
              Singapore (NUS), pursuing a Bachelor of Computing in Computer
              Science (Honours) and am on track to graduate with the Highest
              Distinction honours degree classification with focus areas in
              Software Engineering and Computer Security.
            </Text>
            <Text>
              Here&apos;s some of the languages and tools I have been working
              with recently:
            </Text>
            <Box>{tags}</Box>
          </Stack>
        </GridItem>
        <GridItem p="8">
          <AboutPhoto />
        </GridItem>
      </Grid>
    </Section>
  );
};

export default About;
