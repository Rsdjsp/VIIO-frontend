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
import React from "react";
import NavWrapper from "./NavWrapper";
import { FiFilter, FiSearch } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import NavMenu from "./NavMenu";
import ProductList from "./ProductList";

interface Props {
  modalVariables: { isOpen: boolean; onClose: () => void };
}

export default function SearchModal({ modalVariables }: Props) {
  const { isOpen, onClose } = modalVariables;
  const finalRef = React.useRef(null);

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
        <ModalContent bg="white" overflow="hidden" w="360px" p="0">
          <NavWrapper parameters={{ padding: "12px 24px 0px 16px" }}>
            <Flex w="100%" alignItems="center" gap="16px">
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
              <InputGroup display="flex" flexDir="row">
                <InputLeftElement pointerEvents="none">
                  <Icon w="24px" h="24px" color="black" as={FiSearch} />
                </InputLeftElement>
                <Input variant="search" type="text" placeholder="Search..." />
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
          <Flex w="362px" ml={"-6px"}>
            <ProductList title="100 Results for sofa" />
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
