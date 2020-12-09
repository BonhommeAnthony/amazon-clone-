import { Box, Text, Img, Flex } from "@chakra-ui/react";
import React from "react";
import { useStateValue } from "../StateProvider";
import ButtonAmazon from "./Form/ButtonAmazon";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Flex
      display={["Box", "flex"]}
      key={id}
      className="checkoutProduct"
      my="20px"
    >
      <Img src={image} objectFit="contain" boxSize="180px" />
      <Box className="CheckoutProduct__info" paddingLeft="20px">
        <Text fontSize="17px" fontWeight="800">
          {title}
        </Text>
        <Text>
          <small>€</small>
          <strong>{price}</strong>
        </Text>
        <Flex className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Text key={i}>⭐</Text>
            ))}
        </Flex>
        {!hideButton && (
          <ButtonAmazon onClick={removeFromBasket}>
            Retirer Du Panier
          </ButtonAmazon>
        )}
      </Box>
    </Flex>
  );
};

export default CheckoutProduct;
