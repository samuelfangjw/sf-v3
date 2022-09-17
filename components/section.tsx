import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Box ml={{ base: 8, md: 16 }} mr={{ base: 8, md: 16 }}>
      <Heading as="h2" size="md">
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
