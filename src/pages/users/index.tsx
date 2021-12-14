import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/header";
import { Pagination } from "../../components/pagination";
import { SideBar } from "../../components/sidebar";

const Users: NextPage = () => (
  <Flex as="main" flexDirection="column">
    <Head>
      <title>DashGo | Users</title>
      <meta
        name="description"
        content="Take your dashboards to another level"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <Flex width="100%" my="6" maxWidth={1480} mx="auto" px={6}>
      <SideBar />

      <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">
            Users
          </Heading>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize={20} />}
          >
            New
          </Button>
        </Flex>

        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={6} color="gray.300" width="8">
                <Checkbox color="pink" />
              </Th>
              <Th>User</Th>
              <Th>Created at</Th>
              <Th width={8}></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={6}>
                <Checkbox color="pink" />
              </Td>

              <Td>
                <Box>
                  <Text fontWeight="bold">João Amadeu</Text>
                  <Text fontSize="sm" color="gray.300">
                    jmamadeu@gmail.com
                  </Text>
                </Box>
              </Td>
              <Td>04 set, 2021</Td>
              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                >
                  Edit
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Pagination />
      </Box>
    </Flex>
  </Flex>
);

export default Users;
