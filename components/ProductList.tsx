import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
}

export default function ProductList({ title }: Props) {
  return (
    <Flex
      w="100%"
      as="section"
      p={{ base: "16px 24px", sm: "16px 10%" }}
      flexDir="column"
      alignItems="flex-start"
      gap="12px"
      alignSelf="stretch"
    >
      <Text variant="nav2">{title}</Text>
      <Flex flexDir="row" alignItems="flex-start" flexWrap="wrap" gap="24px">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Flex>
  );
}
