import NavWrapper from "@/components/NavWrapper";
import Head from "next/head";
import ImageCarousel from "@/components/ImageCarousel";
import RoomCard from "@/components/RoomCard";
import SectionWrapper from "@/components/SectionWrapper";
import ShopByCard from "@/components/ShopByCard";
import ScrollWrapper from "@/components/ScrollWrapper";
import ProductList from "@/components/ProductList";
import NavIcon from "@/components/NavIcon";

import { Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { FiBell, FiHome, FiSearch } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import SearchModal from "@/components/SearchModal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>VIIO App</title>
        <meta name="description" content="Test app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex bg="white" w="100%" minH="100vh" flexDir="column">
          <SearchModal modalVariables={{ isOpen, onClose }} />
          <NavWrapper parameters={{ padding: "14px 24px" }}>
            <Flex w="100%">
              <Text variant="nav2">MAYNOOTH</Text>
              <Icon
                as={FiBell}
                color="black"
                w="24px"
                h="24px"
                my="auto"
                ml="auto"
              />
            </Flex>
          </NavWrapper>
          <SectionWrapper parameters="4px 24px">
            <ImageCarousel />
          </SectionWrapper>
          <SectionWrapper parameters="16px 24px">
            <>
              <Text variant="nav2">Room Ideas</Text>
              <ScrollWrapper>
                <>
                  <RoomCard />
                  <RoomCard />
                  <RoomCard />
                  <RoomCard />
                </>
              </ScrollWrapper>
            </>
          </SectionWrapper>
          <SectionWrapper parameters="16px 24px">
            <>
              <Text variant="nav2">Shop By Room</Text>
              <ScrollWrapper>
                <>
                  <ShopByCard />
                  <ShopByCard />
                  <ShopByCard />
                  <ShopByCard />
                </>
              </ScrollWrapper>
            </>
          </SectionWrapper>
          <ProductList title="Recommended for you" />
          <NavWrapper
            parameters={{
              padding: "10px 24px",
            }}
          >
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Button variant="home">
                <Icon as={FiHome} w="20px" h="20px" color="black" />
                <Text variant="nav3">Home</Text>
              </Button>
              <NavIcon icon={FiSearch} action={onOpen} />
              <NavIcon icon={PiShoppingCartSimpleBold} />
              <NavIcon icon={FaRegHeart} />
              <NavIcon icon={LuUser} />
            </Flex>
          </NavWrapper>
        </Flex>
      </main>
    </>
  );
}
