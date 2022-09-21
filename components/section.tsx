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
    <Box marginX={{ base: "8", sm: "16", md: "32" }}>
      <Box
        id={id}
        position="relative"
        top={{ base: "-85px", sm: "-120px" }}
        left="0px"
      />
      <Center>
        <Heading as="h2" size="lg" textAlign="center">
          {title}
        </Heading>
      </Center>
      <Center>
        <Box maxWidth="1000px" paddingY={{ base: "4", sm: "8" }}>
          {children}
        </Box>
      </Center>
    </Box>
  );
};

export default Section;
