import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
}

export default function ProductList({ title }: Props) {
  return (
    <Flex
      as="section"
      p="16px 24px"
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
