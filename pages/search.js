import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BsFilter } from 'react-icons/bs';
import Image from 'next/image';
import { Box, Flex, Icon } from '@chakra-ui/react';

function search() {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
    </Box>
  );
}

export default search;
