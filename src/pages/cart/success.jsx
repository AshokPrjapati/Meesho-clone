import Navbar from "@/components/Navbar/Navbar";
import { Alert, AlertIcon, Container, HStack, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";

const Success = () => {
  const id = () => {
    const orderId =
      "#" + Math.floor(Math.random() * (999999999999 - 1000000000 + 1));
    return <p>Order ID : {orderId}</p>;
  };

  return (
    <>
      <Head>
        <title>ApniDukan-Succes page</title>
        <meta name="description" content="Apni dukan success page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar display="none" />
        <Container maxW={"4xl"} p={"20px 15px"}>
          <Alert status="success">
            <AlertIcon />
            <HStack justify={"space-around"}>
              <Text>Thanks for shopping with us !</Text>
              {id()}
            </HStack>
          </Alert>
        </Container>
      </div>
      ;
    </>
  );
};

export default Success;
