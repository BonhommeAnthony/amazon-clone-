import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box as="home">
      <Box as="home-container">
        <Image
          width="100%"
          zIndex="-1"
          marginBottom="-150px"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
          src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-ZTdjZDU2MDct-w1500._CB417584538_.jpg"
          alt="hero image"
        />
      </Box>
    </Box>
  );
};

export default Home;
