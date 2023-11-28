import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function RoomCard() {
  return (
    <Flex
      w="256px"
      minW="256px"
      h="154px"
      border="2px solid black"
      overflow="hidden"
      rounded="8px"
    >
      <Link href="/products/1">
        <Image
          w="100%"
          src={
            "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
          }
          alt={`Slide  1`}
        />
      </Link>
    </Flex>
  );
}
