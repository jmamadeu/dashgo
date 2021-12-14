import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export const Profile = ({ showProfileData = true }: ProfileProps) => (
  <Flex align="center">
    {showProfileData && (
      <Box mr={4} textAlign="right">
        <Text>João Amadeu</Text>
        <Text color="gray.300">jmamadeu@gmail.com</Text>
      </Box>
    )}
    <Avatar
      size="md"
      name="João Amadeu"
      src="https://github.com/jmamadeu.png"
    />
  </Flex>
);
