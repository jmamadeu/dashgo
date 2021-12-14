import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Input } from "../../components/form/input";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";

const CreateUser: NextPage = () => (
  <Flex as="main" flexDirection="column">
    <Head>
      <title>DashGo | Create User</title>
      <meta
        name="description"
        content="Take your dashboards to another level"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={6}>
      <SideBar />

      <Box flex={1} borderRadius={8} bg="gray.800" p={[6, 8]}>
        <Heading size="lg" fontWeight="normal">
          Create user
        </Heading>
        <Divider my={6} borderColor="gray.700" />

        <VStack spacing={8}>
          <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input name="name" label="Full name" type="text" />
            <Input name="email" label="Your email" type="email" />
            <Input name="password" label="Your password" type="password" />
            <Input name="password" label="Repeat password" type="password" />
          </SimpleGrid>
        </VStack>

        <Flex mt={8} justify="flex-end">
          <HStack spacing={4}>
            <Link href={"/users"} passHref>
              <Button as="a" colorScheme="whiteAlpha">
                Cancel
              </Button>
            </Link>
            <Button colorScheme="pink">Save</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  </Flex>
);

export default CreateUser;
