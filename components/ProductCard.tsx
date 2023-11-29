import React from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  return (
    <Flex
      minW="144px"
      minH="192px"
      maxW={{ base: "144px", sm: "100%" }}
      maxH="50%"
      flexDir="column"
      alignItems="flex-start"
      gap="4px"
      flexShrink={0}
    >
      <Link href={`/products/${product.product_id}`} style={{ width: "100%" }}>
        <Flex
          minW="144px"
          w="100%"
          minH="144px"
          h={{ base: "144px", sm: "90%" }}
          border="2px solid black"
          alignSelf="stretch"
          position="relative"
          overflow="hidden"
          rounded="8px"
        >
          <Image
            w="100%"
            src={product.thumbnails[0][6]}
            alt={`product ${product.product_id}`}
          />
          <Icon
            as={FaRegHeart}
            color="black"
            w="24px"
            h="24px"
            position="absolute"
            right="12px"
            top="12px"
            cursor="pointer"
          />
        </Flex>
      </Link>
      <Flex flexDir="column" alignItems="flex-start">
        <Text variant="name">{product.title}</Text>
        <Text variant="price">{`Rp. ${product.price}`}</Text>
      </Flex>
    </Flex>
  );
}
