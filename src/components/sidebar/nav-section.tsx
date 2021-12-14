import { Box, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NavLink, NavLinkProps } from "./nav-link";

export type NavSectionProps = {
  title?: string;
  navLinks?: NavLinkProps[];
};

export const NavSection = ({ navLinks, title }: NavSectionProps) => {
  const { asPath } = useRouter();

  return (
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
        {navLinks?.map((item) => (
          <NavLink isActive={asPath === item.path} key={item.path} {...item} />
        ))}
      </Stack>
    </Box>
  );
};
