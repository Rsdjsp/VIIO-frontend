import React from "react";
import { Flex, Image } from "@chakra-ui/react";

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
      <Image
        w="116px"
        src={
          "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
        }
        alt={`Slide  1`}
      />
    </Flex>
  );
}
