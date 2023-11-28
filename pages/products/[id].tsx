import ImageCarousel from "@/components/ImageCarousel";
import ProductList from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import { Flex, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function ProductDetails() {
  const router = useRouter();
  return (
    <Flex w="100%" bg="white" flexDir="column">
      <Flex
        as="section"
        w="360px"
        h="360px"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Flex
          as="nav"
          width="100%"
          h="56px"
          p="16px 24px 16px 16px"
          justifyContent="space-between"
          alignItems="flex-start"
          position="absolute"
          zIndex={100}
          top={0}
          bg="white"
        >
          <Icon
            as={FaChevronLeft}
            w="16px"
            h="16px"
            flexShrink={0}
            my="auto"
            color="black"
            top="3px"
            bg="white"
            onClick={() => router.back()}
          />
          <Icon
            as={FiSearch}
            color="black"
            w="24px"
            h="24px"
            flexShrink={0}
            cursor="pointer"
            my="auto"
            bg="white"
          />
        </Flex>
        <ImageCarousel parameters={{ height: "300px", borderRadius: "8px" }} />
      </Flex>
      <Flex as="section" flexDir="column" p="24px">
        <ProductTitle />
      </Flex>
      <ProductList title="Related Products" />
    </Flex>
  );
}
