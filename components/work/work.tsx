import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import Section from "../section";
import JobCard from "./job-card";
import JobDetails from "./job-details";

const Work = () => {
  const timelineColor = useColorModeValue("gray.800", "gray.100");
  const jobs = JobDetails.map((job, idx) => (
    <JobCard
      key={idx}
      company={job.company}
      roles={job.roles}
      achievements={job.achievements}
    />
  ));

  return (
    <Section id="work" title="Where I've Worked">
      <Stack spacing={4} marginY={4} marginLeft="40px" position="relative">
        <Box
          position="absolute"
          width="6px"
          bgColor={timelineColor}
          top="5"
          bottom="0"
          left="-35px"
          borderRadius={3}
        ></Box>
        {jobs}
      </Stack>
    </Section>
  );
};

export default Work;
