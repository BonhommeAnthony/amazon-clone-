import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonAmazon = ({ children }) => {
  return (
    <Button
      background="#f0c14b"
      borderRadius="2px"
      border="1px solid"
      mt="10px"
      borderColor="#a88734 #9c7e31 #846a29"
      color="#111"
    >
      {children}
    </Button>
  );
};

export default ButtonAmazon;
