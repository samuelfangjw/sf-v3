import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import Section from "../section";
import JobCard from "./job-card";

const Work = () => {
  const timelineColor = useColorModeValue("gray.800", "gray.100");

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
        ></Box>
        <JobCard
          company="Voltality"
          roles={[
            "Software Engineer (Part Time) | Aug 2022 - Present",
            "Software Engineer Intern | May - July 2022",
          ]}
          achievements={["Bullet Point 1", "Bullet Point 2", "Bullet Point 3"]}
        />
        <JobCard
          company="TEAMMATES (Open Source)"
          roles={["Maintainer/Contributer | June 2021 - Present"]}
          achievements={["Bullet Point 1", "Bullet Point 2", "Bullet Point 3"]}
        />
        <JobCard
          company="Source Academy"
          roles={["Web Developer | May 2021 - May 2022"]}
          achievements={["Bullet Point 1", "Bullet Point 2", "Bullet Point 3"]}
        />
      </Stack>
    </Section>
  );
};

export default Work;
