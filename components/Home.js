import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";

const Home = () => {
  const HomeRow = ({ children }) => (
    <Flex zIndex="1" mx="5px">
      {children}
    </Flex>
  );
  return (
    <Flex maxW="1500px" justifyContent="center" marginX="auto" className="home">
      <Box className="home-container">
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
        <HomeRow>
          <Product
            id="1234764"
            title="The lean startup"
            price={299.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71r5EDssKdL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1237894"
            title="Think like a monk by Jay Shetty"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"
            rating={5}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="145337894"
            title="Balance connectee bluetooth"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61eAezTS37L._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="12378ffwe94"
            title="Amazon echo dot"
            price={99.99}
            image="https://dyw7ncnq1en5l.cloudfront.net/optim/produits/439/46219/amazon-echo-dot-nouvelle-generation_7252a9882d29f4cb__450_400.jpg"
            rating={5}
          />
          <Product
            id="12378dsd94"
            title="Apple mini"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71LHc0enmbL._AC_SY606_.jpg"
            rating={5}
          />
        </HomeRow>
        <HomeRow>
          <Product
            id="12378hfh94"
            title="Aspirateur"
            price={69.99}
            image="https://m.media-amazon.com/images/I/71xpvZBrcJL._AC_SS350_.jpg"
            rating={5}
          />
        </HomeRow>
      </Box>
    </Flex>
  );
};

export default Home;
