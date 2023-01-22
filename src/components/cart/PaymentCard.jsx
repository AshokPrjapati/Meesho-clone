import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaMoneyBill } from "react-icons/fa";

const PaymentCard = () => {
  return (
    <Stack
      padding={"10px"}
      marginBottom={"15px"}
      border={"1px solid #e1e1e1"}
      borderRadius="5px"
      bg="#e7eeff"
    >
      <Flex
        p={"10px 10px"}
        lineHeight="1.5"
        justifyContent={"space-between"}
        fontSize={"lg"}
        align="center"
      >
        <HStack fontSize={"lg"} fontWeight={400} color="grey">
          <FaMoneyBill color="#038d63" style={{ fontSize: "25px" }} />
          <Text>Cash On Delivery</Text>
        </HStack>
        <CheckCircleIcon fontSize={"2xl"} color={"#038d63"} />
      </Flex>
    </Stack>
  );
};

export default PaymentCard;
