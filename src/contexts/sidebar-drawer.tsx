import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect } from "react";

type SidebarDrawerContentProps = UseDisclosureProps;

export const SidebarDrawerContext = createContext<SidebarDrawerContentProps>(
  {} as SidebarDrawerContentProps
);

export const SidebarDrawerProvider: React.FC = ({ children }) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
