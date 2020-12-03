import { Box, Checkbox, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import CurrencyFormat from "react-currency-format";
import CheckoutForm from "../components/CheckoutForm";

import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

//stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51HtufpFoqBAMA8Bzbb7hsxTuv7CWpmPQndt0eCfGKSLktDpHeZDeORjsLLYpbwIOlzYyOZrqsqSvpQFIoQ25uX7700fg66fova"
  );

  const router = useRouter();
  const [{ user, basket }, dispatch] = useStateValue();

  const PaymentSection = ({ children }) => {
    return (
      <Flex padding="20px" margin="0 20px" borderBottom="1px solid lightgray">
        {children}
      </Flex>
    );
  };

  const PaymentTitle = ({ children }) => (
    <Box flex="0.2">
      <Heading fontSize="18px" as="h3">
        {children}
      </Heading>
    </Box>
  );

  return (
    <Layout>
      <Box name="payment" bgColor="white">
        <Box name="payment__container">
          <Heading
            as="h1"
            textAlign="center"
            padding="10px"
            fontWeight="400"
            backgroundColor="rgb(234,237,237)"
            borderBottom="1px solid lightgray"
            fontSize="30px"
          >
            Checkout(
            <Box
              as="span"
              cursor="pointer"
              onClick={(e) => router.push("/checkout")}
            >
              {basket?.length} items{" "}
            </Box>
            )
          </Heading>
          <PaymentSection>
            <PaymentTitle>Delivery Adress</PaymentTitle>
            <Box name="payment__address" flex="0.8">
              <Text>{user?.email}</Text>
            </Box>
          </PaymentSection>
          <PaymentSection>
            <PaymentTitle as="h3">Review Items and delivery</PaymentTitle>

            <Box name="payment__items" flex="0.8">
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </Box>
          </PaymentSection>
          <PaymentSection>
            <PaymentTitle>Payment Method</PaymentTitle>
            <Box name="payment__details" flex="0.8">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </Box>
          </PaymentSection>
        </Box>
      </Box>
    </Layout>
  );
};

export default payment;
