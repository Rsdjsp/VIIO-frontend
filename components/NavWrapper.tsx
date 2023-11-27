import { Flex } from "@chakra-ui/react";
import React, { ReactComponentElement, ReactElement } from "react";

interface Props {
  children?: ReactElement;
  parameters?: any;
}

export default function NavWrapper({ children, parameters }: Props) {
  return (
    <Flex
      style={parameters}
      h="56px"
      alignItems="flex-start"
      position="sticky"
      top={0}
      zIndex="1"
      bg="white"
    >
      {children}
    </Flex>
  );
}
