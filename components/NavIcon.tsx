import { Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  icon?: IconType;
  action?: () => void;
}

export default function NavIcon({ icon, action }: Props) {
  return (
    <Icon
      as={icon}
      color="black"
      w="24px"
      h="24px"
      flexShrink={0}
      cursor="pointer"
      onClick={action}
    />
  );
}
