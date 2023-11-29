import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  product: any;
}

export default function ShopByCard({ product }: Props) {
  return (
    <Flex
      w="116px"
      minW={{ base: "116px", sm: "35%" }}
      h={{ base: "116px", sm: "50%" }}
      minH="116px"
      borderRadius="8px"
      border="2px solid black"
      overflow="hidden"
    >
      <Link href={`products/${product.product_id}`}>
        <Image
          w="100%"
          h="full"
          objectFit="fill"
          src={product.thumbnails[0][3] || product.thumbnails[0][6]}
          alt={`product ${product.product_id}`}
        />
      </Link>
    </Flex>
  );
}
