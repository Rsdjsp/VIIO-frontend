import { Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon?: IconType;
}

export default function NavIcon({ icon }: Props) {
  return (
    <Icon
      as={icon}
      color="black"
      w="24px"
      h="24px"
      flexShrink={0}
      cursor="pointer"
    />
  );
}
