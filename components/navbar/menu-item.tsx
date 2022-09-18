import { ReactNode } from "react";
import NextLink from "next/link";
import { Button, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";

const MenuItem = ({
  children,
  to,
  onClick,
}: {
  children: ReactNode;
  to: string;
  onClick: () => void;
}) => {
  return (
    <LinkBox width={{ base: "100%" }}>
      <Button variant="ghost" width={{ base: "100%" }} onClick={onClick}>
        <NextLink href={to} passHref>
          <LinkOverlay>
            <Text display="block">{children}</Text>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  );
};

export default MenuItem;
