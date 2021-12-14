import { Text } from "@chakra-ui/react";

export const Logo = () => (
  <Text
    fontSize={["2xl", "3xl"]}
    fontWeight="bold"
    letterSpacing="tight"
    w="64"
  >
    dashgo
    <Text as="span" color="pink.500">
      .
    </Text>
  </Text>
);
