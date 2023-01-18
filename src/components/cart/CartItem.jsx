import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";

const CartItem = ({ title, price, image }) => {
  return (
    <Stack
      padding={"10px"}
      marginBottom={"15px"}
      border={"1px solid #e1e1e1"}
      borderRadius="5px"
    >
      <Flex justify={"space-between"}>
        <Flex w="90%">
          <Image src={image} alt="" w="76px" h="76px" objectFit={"cover"} />
          <Stack p={"0 10px"} lineHeight="1.5">
            <Text fontSize={"16px"} fontWeight={"500"}>
              {title}
            </Text>
            <Text>Qty : 1</Text>
            <Text>₹{price}</Text>
            <Button
              w={"max-content"}
              color={"#f43f97"}
              size={"sm"}
              fontWeight="bold"
              bg={"none"}
              _hover={{
                bg: "none",
              }}
              leftIcon={<CloseIcon fontSize={"10px"} />}
              textAlign="left"
              p={0}
            >
              REMOVE
            </Button>
          </Stack>
        </Flex>
        <Button
          w={"max-content"}
          color={"#f43f97"}
          size={"md"}
          bg={"none"}
          fontWeight="bold"
          _hover={{
            bg: "none",
          }}
          p={0}
        >
          EDIT
        </Button>
      </Flex>
      <Flex
        justify={"space-between"}
        p={"10px 0"}
        borderTop="1px solid #e1e1e1"
      >
        <Text fontSize={"16px"} fontWeight={"500"} color={"grey"}>
          Supplier : Deepti Creations
        </Text>
        <Text fontSize={"16px"} fontWeight={"500"} color={"grey"}>
          Free Delivery
        </Text>
      </Flex>
    </Stack>
  );
};

export default CartItem;
