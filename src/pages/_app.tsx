import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SidebarDrawerProvider } from "../contexts/sidebar-drawer";
import { makeServer } from "../services/mirage";
import { queryClient } from "../services/react-query";
import { customTheme } from "../theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
