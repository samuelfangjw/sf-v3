import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";

const TextLink = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  const linkColor = useColorModeValue("orange.400", "orange.300");
  const linkHoverColor = useColorModeValue("orange.500", "orange.400");

  return (
    <NextLink href={link} passHref>
      <Link
        color={linkColor}
        _hover={{ color: linkHoverColor }}
        fontWeight="bold"
      >
        <Text as="u">{children}</Text>
      </Link>
    </NextLink>
  );
};

export default TextLink;
