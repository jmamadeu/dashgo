import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export const SearchBox = () => (
  <Flex
    as="label"
    flex={1}
    py="4"
    px="8"
    ml="6"
    maxWidth="400"
    color="gray.200"
    position="relative"
    bg="gray.800"
    borderRadius="full"
  >
    <Input
      color="gray.50"
      variant="unstyled"
      placeholder="Search"
      _placeholder={{ color: "gray.400" }}
      px="4"
      mr="4"
    />
    <Icon as={RiSearchLine} />
  </Flex>
);
