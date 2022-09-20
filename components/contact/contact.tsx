import Section from "../section";
import {
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import constants from "../../utils/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const color = useColorModeValue("orange.400", "orange.300");

  return (
    <Section id="contact" title="Get In Touch">
      <Text marginBottom={8}>
        I&apos;m always open to new opportunities, feel free to drop me a
        message if you have any questions or just want to say hi!
      </Text>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={FiMail} />
          <Text display="inline" fontWeight="bold">
            Email:
          </Text>
          <Link
            href={`mailto:${constants.email.value}`}
            color={color}
            marginLeft="36px"
            isExternal
          >
            {constants.email.display}
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaGithub} />
          <Text display="inline" fontWeight="bold">
            GitHub:
          </Text>
          <Link href={constants.github.value} color={color} marginLeft="22px" isExternal>
            {constants.github.display}
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaLinkedin} />
          <Text display="inline" fontWeight="bold">
            LinkedIn:
          </Text>
          <Link href={constants.linkedin.value} color={color} marginLeft="10px" isExternal>
            {constants.linkedin.display}
          </Link>
        </ListItem>
      </List>
    </Section>
  );
};

export default Contact;
