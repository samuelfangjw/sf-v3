import Section from "../section";
import {
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import constants from "../../utils/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextLink from "../text-link";

const Contact = () => {
  const color = useColorModeValue("orange.400", "orange.300");

  return (
    <Section id="contact" title="Get in Touch">
      <Text marginBottom={8}>
        Here&apos;s my contact information if you have any questions about my
        past work!
      </Text>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={FiMail} />
          <Text display="inline" fontWeight="bold">
            Email:
          </Text>
          <TextLink
            link={`mailto:${constants.email.value}`}
            color={color}
            marginLeft="36px"
            isExternal
          >
            {constants.email.display}
          </TextLink>
        </ListItem>
        <ListItem>
          <ListIcon as={FaGithub} />
          <Text display="inline" fontWeight="bold">
            GitHub:
          </Text>
          <TextLink link={constants.github.value} marginLeft="22px" isExternal>
            {constants.github.display}
          </TextLink>
        </ListItem>
        <ListItem>
          <ListIcon as={FaLinkedin} />
          <Text display="inline" fontWeight="bold">
            LinkedIn:
          </Text>
          <TextLink
            link={constants.linkedin.value}
            color={color}
            marginLeft="10px"
            isExternal
          >
            {constants.linkedin.display}
          </TextLink>
        </ListItem>
      </List>
    </Section>
  );
};

export default Contact;
