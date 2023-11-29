import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  product: any;
}

export default function RoomCard({ product }: Props) {
  return (
    <Flex
      w="256px"
      minW={{ base: "154px", sm: "40%" }}
      h={{ base: "154px", sm: "28%" }}
      minH="154px"
      border="2px solid black"
      overflow="hidden"
      rounded="8px"
    >
      <Link href={`products/${product.product_id}`} style={{width:"100%"}}>
        <Image
          w="100%"
          h="150%"
          objectFit="fill"
          src={product.thumbnails[0][6] }
          alt={`product ${product.product_id}`}
        />
      </Link>
    </Flex>
  );
}
