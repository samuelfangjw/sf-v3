import { Center, Container, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Container>
      <Center>
        <Heading as="h2" size="md">
          {title}
        </Heading>
      </Center>
      {children}
    </Container>
  );
};

export default Section;
