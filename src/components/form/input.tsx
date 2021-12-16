import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = ChakraInputProps & {
  name?: string;
  label?: string;
  register?: UseFormRegisterReturn;
  error?: FieldError;
};

export const Input = ({
  name,
  id,
  label,
  register,
  error,
  ...rest
}: InputProps) => (
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}
    <ChakraInput
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: "gray.900"
      }}
      size="lg"
      name={name}
      {...rest}
      {...register}
    />
    {!!error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
  </FormControl>
);
