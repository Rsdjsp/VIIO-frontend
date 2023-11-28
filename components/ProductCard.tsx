import React from "react";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

export default function ProductCard() {
  return (
    <Flex
      w="144px"
      h="192px"
      flexDir="column"
      alignItems="flex-start"
      gap="4px"
      flexShrink={0}
    >
      <Link href="/products/1">
        <Flex
          w="144px"
          h="144px"
          border="2px solid black"
          alignSelf="stretch"
          position="relative"
          overflow="hidden"
          rounded="8px"
        >
          <Image
            w="100%"
            src={
              "https://images.hola.com/imagenes/decoracion/20220321206292/muebles-caracteristicas-por-habitaciones-am/1-63-250/muebles-funciones-6t-t.jpg"
            }
            alt={`Slide  1`}
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
        <Text variant="name">Product Name</Text>
        <Text variant="price">Rp. 500.000</Text>
      </Flex>
    </Flex>
  );
}
