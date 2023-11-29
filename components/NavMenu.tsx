import React from "react";

import { Button, Flex, Icon } from "@chakra-ui/react";
import { LuChevronsUpDown } from "react-icons/lu";

const options = [
  { name: "Relevance", icon: "" },
  { name: "Latest", icon: "" },
  { name: "Top Sales", icon: "" },
  { name: "Price", icon: LuChevronsUpDown },
];

export default function NavMenu() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      alignSelf="stretch"
      padding="0px 24px 0px 16px"
      borderBottom="2px solid lightgray"
      w="360px"
      mx="auto"
    >
      {options.map(({ name, icon }, index) => (
        <Button variant="menu" key={index}>
          {name}
          {icon !== "" && <Icon as={icon} my="auto" />}
        </Button>
      ))}
    </Flex>
  );
}
