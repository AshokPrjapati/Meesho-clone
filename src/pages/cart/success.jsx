import PaymentCard from "@/components/cart/PaymentCard";
import PriceDetails from "@/components/cart/PriceDetails";
import Navbar from "@/components/Navbar/Navbar";
import { getAddress } from "@/redux/address/address.action";
import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Success = () => {
  const { orderData } = useSelector((store) => store.cart);
  const { addressData } = useSelector((store) => store.address);
  const selectedAddress = addressData.map((a) => {
    if (a.selected === true) return a;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
  }, []);
  const { name, house, road, city, state, nearby, pin, mobile } =
    selectedAddress[0];
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
              <Text>Order Id : {`#${orderData.orderId}`}</Text>
            </HStack>
          </Alert>
          <Flex>
            <Box
              w="62%"
              paddingRight="20px"
              borderRight={"1px solid #e1e1e1"}
              mt="10px"
            >
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>Order Details</Text>
              </Flex>
              {orderData.products.map((props) => (
                <Stack
                  padding={"10px"}
                  marginBottom={"15px"}
                  border={"1px solid #e1e1e1"}
                  borderRadius="5px"
                >
                  <Flex justify={"space-between"}>
                    <Flex w="90%">
                      <Image
                        src={props.image}
                        alt=""
                        w="76px"
                        h="76px"
                        objectFit={"cover"}
                      />
                      <Stack p={"0 10px"} lineHeight="1.5">
                        <Text fontSize={"16px"} fontWeight={"500"}>
                          {props.title}
                        </Text>
                        {/* <Text>Qty : {qty}</Text> */}
                        <Text>₹{props.price}</Text>
                      </Stack>
                    </Flex>
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
              ))}
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>Delivery Address </Text>
              </Flex>
              <Stack
                padding={"10px"}
                marginBottom={"15px"}
                border={"1px solid #e1e1e1"}
                borderRadius="5px"
                bg="#e7eeff"
              >
                <Stack p={"0 10px"} lineHeight="1.5">
                  <Text fontSize={"lg"} fontWeight={500}>
                    {name}
                  </Text>
                  <Box fontWeight={500}>
                    <Text>
                      {house}, {road}, {city}
                    </Text>
                    <Text>
                      {state} - {pin},
                    </Text>
                    <Text>{nearby}</Text>
                    <Text>+91 {mobile}</Text>
                  </Box>
                </Stack>
              </Stack>
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
            <Box w="38%">
              <PriceDetails
                display={"flex"}
                dest="/"
                text="Continue Shopping"
              />
            </Box>
          </Flex>
        </Container>
      </div>
      ;
    </>
  );
};

export default Success;
