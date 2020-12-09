import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <Box
      name="order"
      position="relative"
      bgColor="white"
      padding="40px"
      m="20px 0"
    >
      <Heading as="h2">Order</Heading>
      <Text>
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}{" "}
      </Text>
      <Text position="absolute" top="40px" right="20px" name="order__id">
        <small>{order.id}</small>
      </Text>
      {order.data.basket?.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          price={item.price}
          rating={item.rating}
          image={item.image}
          title={item.title}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <Heading
            as="h3"
            fontWeight="500"
            textAlign="right"
            name="order__total"
          >
            Order Total: {value}
          </Heading>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
    </Box>
  );
};

export default Order;
