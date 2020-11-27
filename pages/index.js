import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Home from "../components/Home";

export default function App() {
  return (
    <Box>
      <Box as="main">
        <Home />
      </Box>
    </Box>
  );
}
