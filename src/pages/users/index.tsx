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
  Tr,
  useBreakpointValue
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/header";
import { Pagination } from "../../components/pagination";
import { SideBar } from "../../components/sidebar";

const Users: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
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
            <Link href={"/users/create"} passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                New
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={[4, 4, 6]} color="gray.300" width="8">
                  <Checkbox color="pink" />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>Created at</Th>}
                <Th width={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={[4, 4, 6]}>
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
                {isWideVersion && <Td>04 set, 2021</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    {isWideVersion ? "Edit" : null}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination defaultCurrentPage={3} pages={10} />
        </Box>
      </Flex>
    </Flex>
  );
};
export default Users;
