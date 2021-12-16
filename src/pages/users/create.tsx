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
import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/form/input";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";

type CreateUserFormDataType = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const schemaValidation = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("E-mail is required")
      .email("E-mail format is incorrect"),
    name: yup.string().required("Name is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password too short"),
    confirmPassword: yup
      .string()
      .required("Password is required")
      .min(4, "Password too short")
      .oneOf([null, yup.ref("password")], "password must be the same")
  })
  .required();

const CreateUser: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<CreateUserFormDataType>({
    resolver: yupResolver(schemaValidation)
  });

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data, "data");
  });

  return (
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

        <Box
          as="form"
          onSubmit={onSubmit}
          flex={1}
          borderRadius={8}
          bg="gray.800"
          p={[6, 8]}
        >
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>
          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
              <Input
                label="Full name"
                type="text"
                register={register("name")}
                error={errors.name}
              />
              <Input
                label="Your email"
                type="email"
                register={register("email")}
                error={errors.email}
              />
              <Input
                label="Your password"
                type="password"
                register={register("password")}
                error={errors.password}
              />
              <Input
                label="Confirm password"
                type="password"
                register={register("confirmPassword")}
                error={errors.confirmPassword}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button isLoading={isSubmitting} type="submit" colorScheme="pink">
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CreateUser;
