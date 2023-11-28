import { Avatar, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <Flex alignItems="center" flexDir="column" gap="12px">
      <Flex
        as="section"
        w="100%"
        gap="6px"
        alignItems="flex-start"
        position="relative"
        minH="36px"
      >
        <Avatar w="24px" h="24px" my="auto" />
        <Stack direction="row" spacing={1} w="100%">
          <Text variant="price" minW="110px">
            Ronald Richards
          </Text>
          <Text as="span" fontSize="12px" color="darkgray" ml="auto">
            01-01-2023
          </Text>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          position="absolute"
          bottom={0}
          left="28px"
        >
          <Icon as={FaStar} w="12px" h="12px" color="black" />
          <Icon as={FaStar} w="12px" h="12px" color="black" />
          <Icon as={FaStar} w="12px" h="12px" color="black" />
          <Icon as={FaStar} w="12px" h="12px" color="black" />
          <Icon as={FaStar} w="12px" h="12px" color="black" />
        </Stack>
      </Flex>
      <Text variant="label">
        Lorem ipsum dolor sit amet consectetur. Vitae adipiscing feugiat non
        nunc feugiat. Senectus egestas amet commodo tortor tincidunt diam
        imperdiet lorem.
      </Text>
    </Flex>
  );
}
