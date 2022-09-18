import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

const JobCard = ({
  company,
  roles,
  achievements,
}: {
  company: string;
  roles: string[];
  achievements: string[];
}) => {
  const subHeadings = roles.map((val, idx) => {
    const strs = val.split("|");

    return (
      <Box key={idx}>
        <Heading as="h4" size="sm" color="orange.300" display="inline">
          {strs[0]}
        </Heading>
        <Heading as="h4" size="sm" display="inline">
          | {strs[1]}
        </Heading>
      </Box>
    );
  });
  const bulletPoints = achievements.map((val, idx) => (
    <ListItem key={idx}>{val}</ListItem>
  ));

  return (
    <Box>
      <Heading as="h3" size="md">
        {company}
      </Heading>
      {subHeadings}
      <UnorderedList spacing={2} ml={8}>
        {bulletPoints}
      </UnorderedList>
    </Box>
  );
};

export default JobCard;
