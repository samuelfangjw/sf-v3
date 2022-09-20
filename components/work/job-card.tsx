import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

const JobCard = ({
  company,
  roles,
  achievements,
}: {
  company: string;
  roles: string[];
  achievements: string[];
}) => {
  const color = useColorModeValue("orange.400", "orange.300");

  const subHeadings = roles.map((val, idx) => {
    const strs = val.split("|");

    return (
      <Box key={idx}>
        <Heading as="h4" size="sm" color={color} display="inline">
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
    <Box position="relative">
      <Box
        bgColor={color}
        position="absolute"
        width="22px"
        height="22px"
        left="-43px"
        top="2px"
        borderRadius="50%"
      ></Box>
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
