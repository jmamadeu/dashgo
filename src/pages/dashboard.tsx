import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/header';

const Dashboard: NextPage = () => (
  <Box as="main">
    <Head>
      <title>DashGo | Dashboard</title>
      <meta
        name="description"
        content="Take your dashboards to another level"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
  </Box>
);

export default Dashboard;
