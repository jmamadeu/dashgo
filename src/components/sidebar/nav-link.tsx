import { Icon as ChakraIcon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { IconType } from "react-icons";

export type NavLinkProps = {
  name: string;
  path: string;
  icon: ElementType<IconType>;
};

export const NavLink = ({ name, path, icon: Icon }: NavLinkProps) => (
  <Link
    display="flex"
    href={path}
    align="center"
    _hover={{ color: "pink.400" }}
  >
    <ChakraIcon as={Icon} fontSize={20} />
    <Text ml={4} fontWeight="medium">
      {name}
    </Text>
  </Link>
);
