import { Box, Image, Heading, Img, Flex } from "@chakra-ui/react";
import React from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import Layout from "../components/Layout";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";

const checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const CheckoutTitle = ({ children }) => (
    <Heading as="h2" mr="10px" p="10px" borderBottom="1px solid lightgray">
      {children}
    </Heading>
  );

  return (
    <Layout>
      <Flex
        className="checkout"
        padding="20px"
        backgroundColor="white"
        height="max-content"
      >
        <Box className="checkout__left">
          <Img
            mb="10px"
            w="100%"
            src="https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/A13V1IB3VIYZZH/f35b3027973a976e5437ff6fcf726215.w9031.h3456._SL5000_CR0%2C441%2C5000%2C999_SX1280_.jpg"
          />
          <Box>
            <Heading as="h3" fontWeight="400">
              {user ? `Hello ${user.email}` : null}
            </Heading>
            <CheckoutTitle>Your shopping Cart</CheckoutTitle>
          </Box>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                price={item.price}
                rating={item.rating}
                image={item.image}
                title={item.title}
              />
            );
          })}
        </Box>

        <Box className="checkout__right">
          <Subtotal />
          {/* <CheckoutTitle>the subtotal will go her</CheckoutTitle> */}
        </Box>
      </Flex>
    </Layout>
  );
};

export default checkout;
