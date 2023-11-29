import React from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
  products?: any[];
  loading?: boolean;
}

export default function ProductList({ title, products, loading }: Props) {
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
      {!loading && products && (
        <Grid templateColumns="repeat(2, 1fr)" gap="24px">
          {products!.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </Grid>
      )}
    </Flex>
  );
}
