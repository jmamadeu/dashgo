import { Button, Flex, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Input } from '../components/form/input';

const Home: NextPage = () => (
  <Flex as="main" justify="center" align="center" h="100vh">
    <Head>
      <title>DashGo</title>
      <meta
        name="description"
        content="Take your dashboards to another level"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Flex
      as="form"
      width="100%"
      maxW={360}
      bg="gray.800"
      p={8}
      borderRadius={8}
      flexDir="column"
    >
      <Stack spacing={4}>
        <Input name="email" type="email" label="Your email" />
        <Input name="password" type="password" label="Your password" />
      </Stack>

      <Button type="button" marginTop={6} colorScheme="pink">
        Sign In
      </Button>
    </Flex>
  </Flex>
);

export default Home;
