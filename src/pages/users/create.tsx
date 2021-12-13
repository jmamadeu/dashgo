import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";

const CreateUser: NextPage = () => (
  <Flex as="main" flexDirection="column">
    <Head>
      <title>DashGo | Create Users</title>
      <meta
        name="description"
        content="Take your dashboards to another level"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <Flex width="100%" my="6" maxWidth={1480} mx="auto" px={6}>
      <SideBar />

      <Box flex={1} borderRadius={8} bg="gray.800" p={8}></Box>
    </Flex>
  </Flex>
);

export default CreateUser;
