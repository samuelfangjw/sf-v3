import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ButtonLink from "../button-link";
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
    <ButtonLink link={pageLink}>
      <Text display="block">More Info</Text>
    </ButtonLink>
  );

  const githubButton = githubLink && (
    <ButtonLink link={githubLink} isExternal m={0} p={0} variant="ghost" aria-label="GitHub Page">
      <Icon as={FaGithub} />
    </ButtonLink>
  );

  const projectButton = projectLink && (
    <ButtonLink link={projectLink} isExternal m={0} p={0} variant="ghost" aria-label="Project Page">
      <Icon as={FaExternalLinkAlt} />
    </ButtonLink>
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
