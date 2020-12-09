import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Order from "../components/Order";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

const orders = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <Box padding={["0", "20px 80px"]} name="orders">
        <Heading m="30px 0" as="h1">
          Your Orders
        </Heading>
        <Box name="orders__order">
          {orders?.map((order, i) => (
            <Order key={i} order={order} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default orders;
