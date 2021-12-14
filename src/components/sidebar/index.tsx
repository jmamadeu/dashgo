import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/sidebar-drawer";
import { SidebarNav } from "./sidebar-nav";

export const SideBar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  });

  const { isOpen = true, onClose = () => {} } = useSidebarDrawer();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.800" p="4">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w={64} mr={8}>
      <SidebarNav />
    </Box>
  );
};
