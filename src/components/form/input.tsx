import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react';

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

export const Input = ({ name, label, ...rest }: InputProps) => (
  <FormControl>
    <FormLabel htmlFor="password">{label}</FormLabel>
    <ChakraInput
      name={name}
      id={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900'
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
);
