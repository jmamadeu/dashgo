import { Box, Stack, Text } from "@chakra-ui/react";
import { NavLink, NavLinkProps } from "./nav-link";

export type NavSectionProps = {
  title?: string;
  navLinks?: NavLinkProps[];
};

export const NavSection = ({ navLinks, title }: NavSectionProps) => (
  <Box>
    <Text
      textTransform="uppercase"
      fontWeight="bold"
      color="gray.400"
      fontSize="small"
    >
      {title}
    </Text>
    <Stack spacing="4" mt={8} align="stretch">
      {navLinks?.map(item => (
        <NavLink key={item.path} {...item} />
      ))}
    </Stack>
  </Box>
);
