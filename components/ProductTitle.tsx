import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import NavIcon from "./NavIcon";
import { FiShare2 } from "react-icons/fi";

export default function ProductTitle() {
  return (
    <Flex w="100%" flexDir="column" gap="12px">
      <Text variant="productName">Product Name</Text>
      <Flex
        w="100%"
        justifyContent="space-between"
        flexDir="column"
        position="relative"
      >
        <Text
          variant="nav"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="8px"
        >
          Rp. 200.00{" "}
          <Text
            variant="or"
            as="span"
            my="auto"
            w="fit-content"
            h="fit-content"
            p="4px 8px"
            rounded="16px"
            bg="extraLightGray"
          >
            20% OFF
          </Text>
        </Text>
        <Text variant="label" color="darkgray" textDecoration="line-through">
          Rp. 250.00
        </Text>
        <Text
          variant="or"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="8px"
          color="darkgray"
        >
          1200 Sold{" "}
          <Text
            as="span"
            my="auto"
            w="fit-content"
            h="fit-content"
            p="2px 6px"
            rounded="16px"
            bg="extraLightGray"
          >
            <Icon as={FaStar} mr="4px" />
            4,8
          </Text>
        </Text>
        <Flex position="absolute" right={0} bottom={0} gap="12px">
          <NavIcon icon={FaRegHeart} />
          <NavIcon icon={FiShare2} />
        </Flex>
      </Flex>
    </Flex>
  );
}
