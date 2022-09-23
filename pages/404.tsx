import { NextPage } from "next";
import { Center, Divider, Text, useColorModeValue } from "@chakra-ui/react";
import ButtonLink from "../components/button-link";

const NotFound: NextPage = () => {
  const dividerColor = useColorModeValue("black", "white");

  return (
    <Center w="100vw" h="100vh" flexDir="column">
      <Center h="70px">
        <Text fontSize="2xl">404</Text>
        <Divider
          orientation="vertical"
          borderColor={dividerColor}
          bgColor={dividerColor}
          mx={4}
        />
        <Text fontSize="xl">Page Not Found</Text>
      </Center>
      <ButtonLink link="/" mt={8}>
        Back To Home
      </ButtonLink>
    </Center>
  );
};

export default NotFound;
