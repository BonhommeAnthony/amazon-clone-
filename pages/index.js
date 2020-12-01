import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

import Home from "../components/Home";
import Layout from "../components/Layout";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

export default function App() {
  return (
    <Layout>
      <Box as="main">
        <Home />
      </Box>
    </Layout>
  );
}
