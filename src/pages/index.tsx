import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/form/input";

type SignInFormDataType = {
  email: string;
  password: string;
};

const schemaValidation = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("E-mail is required")
      .email("E-mail format is incorrect"),
    password: yup.string().required("Password is required")
  })
  .required();

const SignIn: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm<SignInFormDataType>({
    resolver: yupResolver(schemaValidation)
  });

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data, "data");
  });

  return (
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
        onSubmit={onSubmit}
      >
        <Stack spacing={4}>
          <Input
            id="myLoginName"
            type="email"
            label="Your email"
            register={register("email")}
            error={errors.email}
          />
          <Input
            id="myLoginPassword"
            type="password"
            label="Your password"
            register={register("password")}
            error={errors.password}
          />
        </Stack>

        <Button
          isLoading={isSubmitting}
          type="submit"
          marginTop={6}
          colorScheme="pink"
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
