import { Icon as ChakraIcon, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { IconType } from "react-icons";

export type NavLinkProps = {
  name: string;
  path: string;
  icon: ElementType<IconType>;
  isActive?: boolean;
};

export const NavLink = ({ name, path, icon: Icon, isActive }: NavLinkProps) => (
  <Link passHref={true} href={path}>
    <ChakraLink
      display="flex"
      align="center"
      color={isActive ? "pink.500" : "gray.50"}
      _hover={{ color: "pink.400" }}
    >
      <ChakraIcon as={Icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">
        {name}
      </Text>
    </ChakraLink>
  </Link>
);
