import React, { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  children?: ReactElement;
}

export default function ScrollWrapper({ children }: Props) {
  return (
    <Flex w="100%" alignItems="flex-start" gap="24px" overflow="auto" pb="16px">
      {children}
    </Flex>
  );
}
