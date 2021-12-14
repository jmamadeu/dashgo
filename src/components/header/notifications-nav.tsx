import { HStack, Icon, IconButton } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export const NotificationsNav = () => (
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
);
