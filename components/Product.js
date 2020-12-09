import { Box, Text, Image, Button, Flex, Img } from "@chakra-ui/react";
import React from "react";
import { useStateValue } from "../StateProvider";
import ButtonAmazon from "./Form/ButtonAmazon";
import { motion } from "framer-motion";

const MotionProduct = motion.custom(Flex);

const Product = ({ title, image, price, rating, id }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <MotionProduct
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      m={["0", "10px"]}
      my="10px"
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
              <Text key={i}>⭐</Text>
            ))}
        </Flex>
      </Box>
      <Img
        maxH="200px"
        width="100%"
        objectFit="contain"
        mb="15px"
        src={image}
      />
      <ButtonAmazon onClick={addToBasket}>Ajouter au panier</ButtonAmazon>
    </MotionProduct>
  );
};

export default Product;
