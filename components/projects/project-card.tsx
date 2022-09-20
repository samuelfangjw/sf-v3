import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Project } from "./project-details";

const ProjectCard = ({
  title,
  description,
  githubLink,
  projectLink,
  pageLink,
  tech,
}: Project) => {
  const bgColor = useColorModeValue("white", "gray.700");

  const moreInfoButton = pageLink && (
    <LinkBox>
      <Button marginY={2}>
        <NextLink href={pageLink} passHref>
          <LinkOverlay>
            <Text display="block">More Info</Text>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  );

  const githubButton = githubLink && (
    <LinkBox>
      <Button variant="ghost" m={0} p={0}>
        <NextLink href={githubLink} passHref>
          <LinkOverlay>
            <Icon as={FaGithub}></Icon>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  );

  const projectButton = projectLink && (
    <LinkBox>
      <Button variant="ghost" m={0} p={0}>
        <NextLink href={projectLink} passHref>
          <LinkOverlay>
            <Icon as={FaExternalLinkAlt} />
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  );

  const tags = tech.map((val, idx) => (
    <Tag key={idx} bg="none">
      {val}
    </Tag>
  ));

  return (
    <Flex
      bg={bgColor}
      boxShadow="lg"
      p={6}
      borderRadius={5}
      height="100%"
      flexDirection="column"
      flexWrap="nowrap"
    >
      <Heading as="h3" size="md" marginBottom={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
      <Box flexGrow={1} />
      <Flex justifyContent="space-between" alignItems="center" marginY={1}>
        <HStack>
          {githubButton}
          {projectButton}
        </HStack>
        {moreInfoButton}
      </Flex>
      <Divider />
      <Flex gap={1} marginTop={3} wrap="wrap">
        {tags}
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
