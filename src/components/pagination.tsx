import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

type PaginationProps = {
  pages: number;
  defaultCurrentPage?: number;
  registerPerPage?: number;
  onPageChange: (page: number) => void;
  siblingsCount?: number;
};

type PaginationITemType = {
  isCurrent?: boolean;
  value: number;
  onClick?: (value: number) => void;
};

function generatePageArrays(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((pg) => pg > 0);
}

const PaginationItem = ({
  isCurrent = false,
  value,
  onClick = () => {}
}: PaginationITemType) => (
  <>
    {isCurrent ? (
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
        {value}
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
        onClick={() => onClick(value)}
      >
        {value}
      </Button>
    )}
  </>
);

export const Pagination = ({
  pages,
  defaultCurrentPage = 1,
  onPageChange,
  registerPerPage = 10,
  siblingsCount = 1
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  const lastPage = Math.floor(pages / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePageArrays(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePageArrays(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  const handleChangeCurrentPage = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  useEffect(() => {
    setCurrentPage(defaultCurrentPage);
  }, [defaultCurrentPage]);

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
          {currentPage * registerPerPage}
        </Text>
        {` `}of{` `}
        <Text as="strong" fontWeight="bold">
          {pages}
        </Text>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem value={1} onClick={handleChangeCurrentPage} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              key={v4()}
              value={page}
              onClick={handleChangeCurrentPage}
            />
          ))}

        <PaginationItem
          key={v4()}
          value={currentPage}
          isCurrent
          onClick={handleChangeCurrentPage}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              key={v4()}
              value={page}
              onClick={handleChangeCurrentPage}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}

            <PaginationItem
              value={lastPage}
              onClick={handleChangeCurrentPage}
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};
