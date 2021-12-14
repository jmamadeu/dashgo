import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type PaginationProps = {
  pages: number;
  defaultCurrentPage?: number;
};

export const Pagination = ({
  pages,
  defaultCurrentPage = 1
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  useEffect(() => {
    setCurrentPage(defaultCurrentPage);
  }, [defaultCurrentPage]);

  const handleChangeCurrentPage = (page: number) => setCurrentPage(page);

  return (
    <Stack
      direction={["column", "row"]}
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <Text as="strong" fontWeight="bold">
          {currentPage}
        </Text>
        {` `}-{` `}
        <Text as="strong" fontWeight="bold">
          5
        </Text>
        {` `}of{` `}
        <Text as="strong" fontWeight="bold">
          {pages}
        </Text>
      </Box>
      <Stack direction="row" spacing="2">
        {Array(pages)
          .fill(1)
          .map((page, index) => (
            <>
              {page + index === currentPage ? (
                <Button
                  size="sm"
                  fontSize="xs"
                  colorScheme="pink"
                  disabled
                  _disabled={{
                    bgColor: "pink.500",
                    cursor: "default"
                  }}
                  onClick={() => handleChangeCurrentPage(page + index)}
                >
                  {index + page}
                </Button>
              ) : (
                <Button
                  size="sm"
                  fontSize="xs"
                  bgColor="gray.700"
                  width={4}
                  _hover={{
                    bgColor: "gray.500"
                  }}
                  onClick={() => handleChangeCurrentPage(page + index)}
                >
                  {page + index}
                </Button>
              )}
            </>
          ))}
      </Stack>
    </Stack>
  );
};
