import { Flex } from "@chakra-ui/react";

import React, { ReactElement } from "react";

interface Props {
  children?: ReactElement;
  parameters?: any;
}

export default function NavWrapper({ children, parameters }: Props) {
  return (
    <Flex
      w="100%"
      h="56px"
      alignItems="flex-start"
      position="sticky"
      top={0}
      zIndex="1"
      bg="white"
      padding={{ base: "16px 24px", sm: parameters.padding }}
    >
      {children}
    </Flex>
  );
}
