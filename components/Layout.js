import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box as="body" backgroundColor="rgb(234,237,237)">
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
