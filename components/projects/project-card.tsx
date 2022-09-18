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

export type Project = {
  title: string;
  description: string;
  githubLink: string;
  projectLink: string;
  pageLink: string;
  tech: string[];
};

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

  const tags = tech.map((val, idx) => <Tag key={idx} bg="none">{val}</Tag>);

  return (
    <Box bg={bgColor} boxShadow="lg" p={4} borderRadius={5}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Flex justifyContent="space-between" alignItems="center">
        {moreInfoButton}
        <HStack>
          {githubButton}
          {projectButton}
        </HStack>
      </Flex>
      <Divider />
      <HStack spacing={1} marginTop={3}>
        {tags}
      </HStack>
    </Box>
  );
};

export default ProjectCard;
