import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import NavWrapper from "./NavWrapper";
import { FiFilter, FiSearch } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import NavMenu from "./NavMenu";
import ProductList from "./ProductList";
import { useAppSelector } from "@/redux/hooks";
import { getProducts } from "@/redux/slices/products";

interface Props {
  modalVariables: { isOpen: boolean; onClose: () => void };
}

export default function SearchModal({ modalVariables }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onClose } = modalVariables;
  const finalRef = useRef(null);
  const { products, loading } = useAppSelector(getProducts);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        ref={finalRef}
        tabIndex={-1}
        position="absolute"
        top={0}
        aria-label="Focus moved to this box"
      >
        Some other content that&apos;ll receive focus on close.
      </Box>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent
          display="flex"
          flexDir="column"
          bg="white"
          overflow="hidden"
          w={{ base: "100%", sm: "80%", md: "70%", lg: "50%" }}
          p="0"
        >
          <NavWrapper parameters={{ padding: "12px 24px 0px 16px" }}>
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="space-between"
              gap="16px"
            >
              <Icon
                as={FaChevronLeft}
                w="16px"
                h="16px"
                flexShrink={0}
                my="auto"
                color="black"
                onClick={onClose}
                cursor="pointer"
              />
              <InputGroup
                display="flex"
                flexDir="row"
                mx="auto"
                justifyContent="center"
              >
                <InputLeftElement ml="25%">
                  <Icon w="24px" h="24px" color="black" as={FiSearch} />
                </InputLeftElement>
                <Input
                  variant="search"
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
              <Icon
                as={FiFilter}
                w="24px"
                h="24px"
                flexShrink={0}
                my="auto"
                color="black"
              />
            </Flex>
          </NavWrapper>
          <NavMenu />
          <Flex w={{ base: "362px", sm: "100%" }} h={"744px"} overflow="auto">
            <ProductList
              title="100 Results for sofa"
              products={filteredProducts}
              loading={loading}
            />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
