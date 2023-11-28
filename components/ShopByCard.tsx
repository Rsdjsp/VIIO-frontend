import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function ShopByCard() {
  return (
    <Flex
      w="116px"
      minW="116px"
      h="116px"
      borderRadius="8px"
      border="2px solid black"
      overflow="hidden"
    >
      <Link href="/products/1">
        <Image
          w="100%"
          h="100%"
          src={
            "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
          }
          alt={`Slide  1`}
        />
      </Link>
    </Flex>
  );
}
