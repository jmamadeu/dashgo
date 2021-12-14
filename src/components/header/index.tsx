import { Flex } from "@chakra-ui/react";
import { Logo } from "./logo";
import { NotificationsNav } from "./notifications-nav";
import { Profile } from "./profile";
import { SearchBox } from "./search-box";

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
    <Logo />

    <SearchBox />

    <Flex align="center" ml="auto">
      <NotificationsNav />
      <Profile />
    </Flex>
  </Flex>
);
