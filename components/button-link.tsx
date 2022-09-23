import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";

const ButtonLink = ({
  children,
  link,
  isExternal,
  ...props
}: {
  children: ReactNode;
  link: string;
  isExternal?: boolean;
  [key: string]: any;
}) => {
  return (
    <NextLink href={link} passHref>
      <Button
        as="a"
        {...(isExternal && { target: "_blank" })}
        {...(isExternal && { rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default ButtonLink;
