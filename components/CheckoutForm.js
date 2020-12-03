import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import ButtonAmazon from "./Form/ButtonAmazon";
import axios from "../axios";
import { useRouter } from "next/router";
import { db } from "../firebase";

const CheckoutForm = () => {
  const router = useRouter();
  const [{ user, basket }, dispatch] = useStateValue();
  console.log(user);

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setsucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("the secret is", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setsucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        router.replace("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={handleChange} />
      <Box name="payment__priceContainer">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <Text as="p">
                Subtotal ({basket.length}{" "}
                {basket.length <= 1 ? "Item" : "Items"} ) :
                <strong> {value} </strong>
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
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
        />
        <ButtonAmazon
          type="submit"
          disabled={processing || disabled || succeeded}
        >
          <Box as="span">{processing ? "Processing" : "Buy Now"}</Box>
        </ButtonAmazon>
      </Box>
      {error && <Box>{error}</Box>}
    </form>
  );
};

export default CheckoutForm;
