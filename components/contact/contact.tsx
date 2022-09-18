import Section from "../section";
import { Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";
import constants from "../../utils/constants";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <Text>
        I&apos;m always open to new opportunities, feel free to drop me a
        message if you have any questions or just want to say hi!
      </Text>
      <List>
        <ListItem>
          <ListIcon as={FiMail} />
          <Text display="inline" fontWeight="bold">
            Email:
          </Text>
          <Link
            href={`mailto:${constants.email.value}`}
            color="orange.300"
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
          <Link href={constants.github.value} color="orange.300" isExternal>
            {constants.github.display}
          </Link>
        </ListItem>
      </List>
    </Section>
  );
};

export default Contact;
