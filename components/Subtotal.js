import { Box, Button, Input, Text, Flex, Checkbox } from "@chakra-ui/react";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import ButtonAmazon from "./Form/ButtonAmazon";
import { useRouter } from "next/router";

const Subtotal = () => {
  const router = useRouter();
  const [{ basket, user }, dispatch] = useStateValue();

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
              Total ({basket.length} {basket.length <= 1 ? "Objet" : "Objets"}{" "}
              ):
              <strong>{value}</strong>
            </Text>
            <Text
              as="small"
              className="subtotal__gift"
              display="flex"
              alignItems="center"
            >
              <Checkbox mr="5px" /> Cette commande contient un cadeau
            </Text>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      {user ? (
        <ButtonAmazon onClick={(e) => router.push("/payment")}>
          procéder au paiement
        </ButtonAmazon>
      ) : (
        <ButtonAmazon onClick={(e) => router.push("/login")}>
          Se connecter
        </ButtonAmazon>
      )}
    </Flex>
  );
};

export default Subtotal;
