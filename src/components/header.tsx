import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Text
} from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine
} from "react-icons/ri";

export const Header = () => (
  <Flex
    as="header"
    w="100%"
    maxWidth={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
  >
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text as="span" color="pink.500">
        .
      </Text>
    </Text>

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
    <Flex align="center" ml="auto">
      <HStack
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <IconButton aria-label="icon" background="transparent">
          <Icon as={RiNotificationLine} />
        </IconButton>
        <IconButton aria-label="icon" background="transparent">
          <Icon as={RiUserAddLine} />
        </IconButton>
      </HStack>
      <Flex align="center">
        <Box mr={4} textAlign="right">
          <Text>João Amadeu</Text>
          <Text color="gray.300">jmamadeu@gmail.com</Text>
        </Box>
        <Avatar
          size="md"
          name="João Amadeu"
          src="https://github.com/jmamadeu.png"
        />
      </Flex>
    </Flex>
  </Flex>
);
