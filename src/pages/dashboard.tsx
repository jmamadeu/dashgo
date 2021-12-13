import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Header } from "../components/header";
import { SideBar } from "../components/sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const optionsChart: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      "2121-03-18T00:00:00.00Z",
      "2121-03-19T00:00:00.00Z",
      "2121-03-20T00:00:00.00Z",
      "2121-03-21T00:00:00.00Z",
      "2121-03-22T00:00:00.00Z"
    ]
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  {
    name: "series1",
    data: [23, 23, 43, 54, 23, 43]
  }
];

const Dashboard: NextPage = () => (
  <Flex as="main" flexDirection="column">
    <Head>
      <title>DashGo | Dashboard</title>
      <meta
        name="description"
        content="Take your dashboards to another level"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <Flex width="100%" my="6" maxWidth={1480} mx="auto" px={6}>
      <SideBar />

      <SimpleGrid flex={1} gap={4} minChildWidth="320px" align="flex-start">
        <Box p={8} bg="gray.800" borderRadius={8}>
          <Text fontSize="lg" mb={4}>
            Subscribers of the week
          </Text>

          <Chart
            type="area"
            height={160}
            options={optionsChart}
            series={series}
          />
        </Box>
        <Box p={8} bg="gray.800" borderRadius={8}>
          <Text fontSize="lg" mb={4}>
            Opening rate
          </Text>

          <Chart
            type="area"
            height={160}
            options={optionsChart}
            series={series}
          />
        </Box>
      </SimpleGrid>
    </Flex>
  </Flex>
);

export default Dashboard;
