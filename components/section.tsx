import { Box, Center, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

const Section = ({
  children,
  title,
  id,
}: {
  children: ReactNode;
  title: string;
  id: string;
}) => {
  return (
    <Box id={id} marginX={{ base: "8", sm: "16", md: "32" }}>
      <Center>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
      </Center>
      <Center>
        <Box maxWidth="1000px">{children}</Box>
      </Center>
    </Box>
  );
};

export default Section;
