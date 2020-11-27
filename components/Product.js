import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import React from "react";
import ButtonAmazon from "./Form/ButtonAmazon";

const Product = ({ title, image, price, rating, id }) => {
  return (
    <Flex
      m="10px"
      p="20px"
      width="100%"
      maxH="400px"
      minW="100px"
      alignItems="center"
      justifyContent="flex-end"
      zIndex="1"
      backgroundColor="white"
      direction="column"
      className="product"
    >
      <Box height="100px" mb="15px" className="product__info">
        <Text>{title}</Text>
        <Text mt="5px" className="product__price">
          <Text as="small">$</Text>
          <Text as="strong">{price}</Text>
        </Text>
        <Flex className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Text>⭐</Text>
            ))}
        </Flex>
      </Box>
      <Image
        maxH="200px"
        width="100%"
        objectFit="contain"
        mb="15px"
        src={image}
      />
      <ButtonAmazon>Add to cart</ButtonAmazon>
    </Flex>
  );
};

export default Product;
