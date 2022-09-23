import { Box, Grid, GridItem, Stack, Tag, Text } from "@chakra-ui/react";
import Section from "../section";
import TextLink from "../text-link";
import AboutPhoto from "./photo";

const About = () => {
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
              at <TextLink link="https://www.voltality.io" isExternal>Voltality</TextLink>.
              I&apos;m also a final year student at the National University of
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
