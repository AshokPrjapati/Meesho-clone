import CartItem from "@/components/cart/CartItem";
import CartNav from "@/components/cart/CartNav";
import { Text, Button, Flex, Image, Box, Container, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Head from "next/head";
import PriceDetails from "@/components/cart/PriceDetails";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, } from "@/redux/cart/cart.action";
import useToastMsg from "@/custom-hooks/useToast";
import { useRouter } from "next/router";
import useLoadingIndicator from "@/custom-hooks/useLoadingIndicator";
import Loader from "@/components/Loader/Loader";

const Cart = () => {
  const Toast = useToastMsg();
  const { cartProducts } = useSelector((store) => store.cart);
  const router = useRouter();
  const loading = useLoadingIndicator();

  const token = useSelector(store => store.login.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts(token, Toast));
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Head>
        <title>ApniDukan-Cart</title>
        <meta name="description" content="Apni dukan cart page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {loading ? <h1>Loading...</h1> : */}
      <div>
        <CartNav image={"./images/s1.png"} />
        {cartProducts.length ? (
          <Container maxW={{ sm: "100%", lg: "80%" }} p={"10px 15px"} display={{ sm: "grid", base: "grid", lg: "flex" }}>
            <Flex w={{ base: "100%", md: "70%" }} >
              <Box
                w={"100%"}
                paddingRight="10px"
                borderRight={"1px solid #e1e1e1"}
              >
                <Heading
                  fontSize={"18px"}
                  fontWeight="500"
                  color={"#000"}
                  padding={"15px 0"}
                >
                  Cart
                  <span
                    style={{
                      color: "grey",
                      borderLeft: "1px solid gray",
                      marginLeft: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    {cartProducts.length} Items
                  </span>
                </Heading>
                {cartProducts.map((products) => (
                  <CartItem
                    key={products._id}
                    {...products}
                  />
                ))}
              </Box>
            </Flex>
            <Box w={{ sm: "100%", lg: "38%" }} >
              <PriceDetails
                display={"flex"}
                dest="/cart/address"
                text="Continue"
              />
            </Box>

          </Container>
        ) : (
          <Flex
            width={"100%"}
            h={"85vh"}
            alignItems="center"
            justifyContent={"center"}
            flexDirection="column"
            gap="20px"

          >
            <Image
              src="https://images.meesho.com/images/pow/empty-cart.png"
              alt="empty cart"
            />
            <Text fontSize={"18px"} fontWeight={"600"}>
              Your cart is empty
            </Text>
            <Button
              color={"#f43f97"}
              size={"lg"}
              border={"1px solid #f43f97"}
              bg={"none"}
              _hover={{
                bg: "none",
              }}
              onClick={() => router.push("/products")}
            >
              View Products
            </Button>
          </Flex>
        )}
      </div>
      {/* } */}
    </>
  );
};


export default Cart;
