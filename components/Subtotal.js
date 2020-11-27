import { Box, Button, Input, Text, Flex, Checkbox } from "@chakra-ui/react";
import React from "react";
import CurrencyFormat from "react-currency-format";
import ButtonAmazon from "./Form/ButtonAmazon";

const Subtotal = () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      width="300px"
      height="150px"
      p="20px"
      backgroundColor="#f3f3f3"
      border="1px solid #dddddd"
      borderRadius="3px"
      className="subtotal"
    >
      <CurrencyFormat
        renderText={(value) => (
          <>
            <Text as="p">
              Subtotal (0 items):
              <strong>0</strong>
            </Text>
            <Text
              as="small"
              className="subtotal__gift"
              display="flex"
              alignItems="center"
            >
              <Checkbox mr="5px" /> This order contains a gift
            </Text>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <ButtonAmazon>Proceed to Checkout</ButtonAmazon>
    </Flex>
  );
};

export default Subtotal;
