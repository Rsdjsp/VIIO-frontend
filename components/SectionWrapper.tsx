import { Flex } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Interface } from "readline";

interface Props {
  children?: ReactElement;
  parameters?: string;
}

export default function SectionWrapper({ children, parameters }: Props) {
  return (
    <Flex
      as="section"
      w="100%"
      p={{ base: "4px 24px", sm: parameters }}
      flexDir="column"
      alignItems="flex-start"
      alignSelf="stretch"
      gap="12px"
    >
      {children}
    </Flex>
  );
}
