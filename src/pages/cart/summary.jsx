import CartNav from "@/components/cart/CartNav";
import PriceDetails from "@/components/cart/PriceDetails";
import Head from "next/head";
import React, { useEffect } from "react";

import { Text, Flex, Box, Container, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "@/components/cart/CartItem";
import {
  cartTotalPrice,
  getCartProducts,
  removeCartProduct,
} from "@/redux/cart/cart.action";
import AddressCard from "@/components/cart/AddressCard";
import { getAddress } from "@/redux/address/address.action";
import PaymentCard from "@/components/cart/PaymentCard";
import PaymentDetails from "@/components/cart/PaymentDetails";

function Summary() {
  const { cartProducts, cartTotal } = useSelector((store) => store.cart);
  const { addressData } = useSelector((store) => store.address);
  const selectedAddress = addressData.map((a) => {
    if (a.selected === true) return a;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(getAddress());
  }, []);

  useEffect(() => {
    let tp = 0;
    for (let p of cartProducts) {
      tp += p.price;
    }
    dispatch(cartTotalPrice(tp));
  }, [cartProducts]);

  const handleTp = (p) => {
    dispatch(cartTotalPrice(cartTotal + p));
  };
  const removeProduct = (id) => {
    dispatch(removeCartProduct(id));
  };
  return (
    <>
      <Head>
        <title>ApniDukan-Payment page</title>
        <meta name="description" content="Apni dukan Payment page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CartNav image={"../../../images/s4.png"} />
        <Container maxW={"4xl"} p={"20px 15px"}>
          <Flex>
            <Box w="62%" paddingRight="20px" borderRight={"1px solid #e1e1e1"}>
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>Product Details</Text>
              </Flex>
              {cartProducts.map((products) => (
                <CartItem
                  key={products.id}
                  {...products}
                  handleTp={handleTp}
                  removeProduct={removeProduct}
                />
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
              <AddressCard {...selectedAddress[0]} display={"none"} />
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
              <PaymentDetails />
            </Box>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Summary;
