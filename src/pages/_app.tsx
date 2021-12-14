import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SidebarDrawerProvider } from "../contexts/sidebar-drawer";
import { customTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
