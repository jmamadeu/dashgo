import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SidebarDrawerProvider } from "../contexts/sidebar-drawer";
import { makeServer } from "../services/mirage";
import { customTheme } from "../theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

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
