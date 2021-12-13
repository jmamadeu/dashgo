import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
  RiUserLine
} from "react-icons/ri";

export const SideBar = () => (
  <Box as="aside" w={64} mr={8}>
    <Stack spacing="12" align="flex-start">
      <Box>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          color="gray.400"
          fontSize="small"
        >
          General
        </Text>
        <Stack spacing="4" mt={8} align="stretch">
          <Link display="flex" align="center" _hover={{ color: "pink.400" }}>
            <Icon as={RiDashboardLine} fontSize={20} />
            <Text ml={4} fontWeight="medium">
              Dashboard
            </Text>
          </Link>

          <Link display="flex" align="center" _hover={{ color: "pink.400" }}>
            <Icon as={RiUserLine} fontSize={20} />
            <Text ml={4} fontWeight="medium">
              Users
            </Text>
          </Link>
        </Stack>
      </Box>

      <Box>
        <Text
          textTransform="uppercase"
          fontWeight="bold"
          color="gray.400"
          fontSize="small"
        >
          Automation
        </Text>
        <Stack spacing="4" mt={8} align="stretch">
          <Link display="flex" align="center" _hover={{ color: "pink.400" }}>
            <Icon as={RiInputMethodLine} fontSize={20} />
            <Text ml={4} fontWeight="medium">
              Forms
            </Text>
          </Link>

          <Link display="flex" align="center" _hover={{ color: "pink.400" }}>
            <Icon as={RiGitMergeLine} fontSize={20} />
            <Text ml={4} fontWeight="medium">
              Automation
            </Text>
          </Link>
        </Stack>
      </Box>
    </Stack>
  </Box>
);
