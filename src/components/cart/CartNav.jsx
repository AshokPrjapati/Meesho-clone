import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const CartNav = ({ image }) => {
  return (
    <Flex w={"100%"} h="75px" border="1px solid #e1e1e1" align={"center"}>
      <Box h={"100%"}>
        <Image h={"100%"} src="../../../logo.png" alt="logo" />
      </Box>
      <Box w={"80%"} align="center">
        <Image src={image} alt="step" />
      </Box>
    </Flex>
  );
};

export default CartNav;
