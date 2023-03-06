import CartNav from "@/components/cart/CartNav";
import PriceDetails from "@/components/cart/PriceDetails";
import Head from "next/head";
import React from "react";

import { Text, Flex, Box, Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import PaymentCard from "@/components/cart/PaymentCard";

const Payment = () => {
  return (
    <>
      <Head>
        <title>ApniDukan-Payment page</title>
        <meta name="description" content="Apni dukan Payment page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CartNav image={"../../../images/s3.png"} />
        <Container  maxW={"4xl"} display={{sm:"grid",lg:"flex"}} p={"20px 15px"}>
          <Flex  w={{base:"100%",md:"70%"}}>
            <Box w={"100%"} paddingRight="20px" borderRight={"1px solid #e1e1e1"}>
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>Payment Method</Text>
                <Image
                  src="../../../images/payment.png"
                  width={"80px"}
                  height={"35px"}
                />
              </Flex>
              <PaymentCard />
            </Box>
         
          </Flex>
          <Box  w={{sm:"100%",lg:"38%"}}>
              <PriceDetails
                display={"flex"}
                dest="/cart/summary"
                text="Continue"
              />
            </Box>
        </Container>
      </div>
    </>
  );
};

export default Payment;
