import ImageCarousel from "@/components/ImageCarousel";
import ProductList from "@/components/ProductList";
import ProductTitle from "@/components/ProductTitle";
import Reviews from "@/components/Reviews";
import React, { useState } from "react";
import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronLeft, FaChevronUp } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import SectionWrapper from "@/components/SectionWrapper";

const mockColors = [
  "#828A95",
  "#243E36",
  "#7CA982",
  "#938581",
  "#C2A83E",
  "#CEEAF7",
];

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [textHeight, setTextHeight] = useState("102px");
  return (
    <Flex w="100%" bg="white" flexDir="column" alignSelf="stretch">
      <Flex
        as="section"
        w="100%"
        minH="360px"
        h={{ base: "360px", sm: "40%"}}
        pt="5.5%"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Flex
          as="nav"
          width="100%"
          h="56px"
          p={{ base: "16px 24px 16px 16px", sm: "16px 20%" }}
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
        <Flex p={{ base: "24px", sm: "24px 20%" }}>
          <ImageCarousel customClass={"custom-carousel"} />
        </Flex>
      </Flex>
      <Flex as="section" flexDir="column" p={{ base: "24px", sm: "24px 20%" }}>
        <ProductTitle />
      </Flex>
      <Flex as="section" p={{ base: "24px", sm: "24px 20%" }} flexDir="column">
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
        <Flex
          w="100%"
          as="section"
          flexDir="column"
          gap="8px"
          p={{ base: "24px", sm: "24px 0px" }}
        >
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
      <Flex
        as="section"
        flexDir="column"
        p={{ base: "24px", sm: "0px 20%" }}
        gap="12px"
      >
        <Text variant="nav">Reviews</Text>
        <Reviews />
        <Reviews />
        <Reviews />
        <Reviews />
      </Flex>
      <Flex p={{ base: "0px", sm: "24px 12%" }}>
        <ProductList title="Related Products" />
      </Flex>
    </Flex>
  );
}
