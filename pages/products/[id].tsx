import ImageCarousel from "@/components/ImageCarousel";
import ProductList from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import Reviews from "@/components/Reviews";
import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const mockColors = [
  "#828A95",
  "#243E36",
  "#7CA982",
  "#938581",
  "#C2A83E",
  "#CEEAF7",
];

export default function ProductDetails() {
  const router = useRouter();
  const [textHeight, setTextHeight] = useState("102px");
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
      <Flex as="section" p="24px" flexDir="column">
        <Text variant="nav">
          Select Variation
          <Text as="span" color="darkgray" variant="label">
            (6 Color)
          </Text>
        </Text>
        <Flex flexWrap="wrap" gap="12px" py="8px">
          {mockColors.map((color, index) => (
            <Stack
              cursor="pointer"
              _hover={{ boxShadow: "10px 10px 21px 0px rgba(0,0,0,0.28)" }}
              bg={color}
              key={index}
              w="28px"
              h="28px"
              rounded="full"
            />
          ))}
        </Flex>
        <Flex as="section" flexDir="column" gap="8px" py="24px">
          <Text variant="nav">Description</Text>
          <Text
            variant="label"
            color="darkgray"
            h={textHeight}
            overflow="hidden"
            textOverflow="ellipsis"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, voluptate, quos, voluptatum doloremque dolorum
            asperiores quia quibusdam fugiat atque quae? Quisquam voluptates,
            voluptate, quos, voluptatum doloremque dolorum asperiores quia
            quibusdam fugiat atque quae? Quisquam voluptates, voluptate, quos,
            voluptatum doloremque dolorum asperiores quia quibusdam fugiat atque
            quae? Quisquam voluptates, voluptate, quos, voluptatum doloremque
            dolorum asperiores quia quibusdam fugiat atque quae? Quisquam
            voluptates, voluptate, quos, voluptatum doloremque dolorum
            asperiores quia quibusdam fugiat atque quae? Quisquam voluptates,
            voluptate.
          </Text>

          <Text
            variant="nav3"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            p="8px 4px 6px 4px"
            onClick={() =>
              textHeight === "fit-content"
                ? setTextHeight("102px")
                : setTextHeight("fit-content")
            }
          >
            {textHeight === "fit-content" ? "View less" : "View more"}
            <Icon
              as={textHeight === "fit-content" ? FaChevronUp : FaChevronDown}
            />
          </Text>
        </Flex>
      </Flex>
      <Flex as="section" flexDir="column" p="24px" gap="12px">
        <Text variant="nav">Reviews</Text>
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
      </Flex>
      <ProductList title="Related Products" />
    </Flex>
  );
}
