import { Box, Button, Stack, Text } from "@chakra-ui/react";

export const Pagination = () => (
  <Stack
    direction="row"
    mt={8}
    justify="space-between"
    align="center"
    spacing={6}
  >
    <Box>
      <Text as="strong" fontWeight="bold">
        1
      </Text>
      -
      <Text as="strong" fontWeight="bold">
        1
      </Text>
      of
      <Text as="strong" fontWeight="bold">
        100
      </Text>
    </Box>
    <Stack direction="row" spacing="2">
      <Button
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default"
        }}
      >
        1
      </Button>
      <Button
        size="sm"
        fontSize="xs"
        bgColor="gray.700"
        width={4}
        _hover={{
          bgColor: "gray.500"
        }}
      >
        2
      </Button>
    </Stack>
  </Stack>
);
