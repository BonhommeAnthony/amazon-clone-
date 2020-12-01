import { Box, Flex, Image, Input, Icon, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

//icon
import { MdSearch } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const Options = ({ children }) => <Flex color="white">{children}</Flex>;
  const Option = ({ children, href, onClick }) => (
    <NextLink href={href}>
      <Flex
        onClick={onClick}
        cursor="pointer"
        direction="column"
        ml="10px"
        mr="10px"
      >
        {children}
      </Flex>
    </NextLink>
  );

  const OptionLine1 = ({ children }) => (
    <Box as="span" fontSize="10px">
      {children}
    </Box>
  );
  const OptionLine2 = ({ children, mx }) => (
    <Box as="span" fontWeight="800" fontSize="13px" marginX={mx}>
      {children}
    </Box>
  );

  return (
    <Flex
      as="header"
      zIndex="100"
      top="0"
      position="sticky"
      height="60px"
      alignItems="center"
      backgroundColor={"#131921"}
    >
      <Box width="100px" objectFit="contain" margin="0 20px" mt="18px">
        <NextLink href="/">
          <Link>
            <Image src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          </Link>
        </NextLink>
      </Box>
      <Box display="flex" flex="1" alignItems="center" borderRadius="24px">
        <Input
          borderRightRadius="0"
          bg="white"
          h={10}
          padding="10px"
          border="none"
          width="100%"
          type="text"
        />

        <Icon
          borderRightRadius="5px"
          backgroundColor={"#cd9042"}
          padding="5px"
          boxSize={10}
          as={MdSearch}
        />
      </Box>

      <Options>
        <Option onClick={handleAuthentication} href={!user ? "/login" : "/"}>
          <OptionLine1>{user ? user.email : "Hello Guest"}</OptionLine1>
          <OptionLine2>{user ? "Sign-Out" : "sign-In"}</OptionLine2>
        </Option>
        <Option href="/">
          <OptionLine1> Returns</OptionLine1>
          <OptionLine2>Orders</OptionLine2>
        </Option>
        <Option href="/">
          <OptionLine1>Your</OptionLine1>
          <OptionLine2>Prime</OptionLine2>
        </Option>
      </Options>
      <Flex color="white" alignItems="center">
        <NextLink href="/checkout">
          <Link>
            <Icon boxSize={5} as={HiOutlineShoppingCart} />
            <OptionLine2 mx="10px">{basket?.length}</OptionLine2>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Header;
