import CartNav from "@/components/cart/CartNav";
import Head from "next/head";
import React, { useEffect } from "react";
import { Text, Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import PriceDetails from "@/components/cart/PriceDetails";
import AddressCard from "@/components/cart/AddressCard";
import AddressForm from "@/components/cart/AddressForm";
import AddressSideBar from "@/components/cart/AddressSideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "@/redux/address/address.action";

const Address = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const token = useSelector((store) => store.login.token);
  const { addressData } = useSelector((store) => store.address);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress(token));
  }, []);

  return (
    <>
      <Head>
        <title>ApniDukan-Address page</title>
        <meta name="description" content="Apni dukan Address page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CartNav image={"../../../images/s2.png"} />
        <AddressSideBar
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        />

        <Container maxW={"5xl"} display={{sm:"grid",lg:"flex"}} p={"20px 15px"} >
          <Flex  w={{base:"100%",md:"70%"}}>
            <Box w={"100%"} paddingRight="20px" borderRight={"1px solid #e1e1e1"}>
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>
                  {addressData.length
                    ? "Select Delivery Address"
                    : "Fill Delivery Address"}
                </Text>
                <Text
                  color={"#f43397"}
                  display={addressData.length ? "block" : "none"}
                  cursor="pointer"
                  onClick={onOpen}
                >
                  +Add New Address
                </Text>
              </Flex>
              {addressData.length ? (
                addressData.map((a) => (
                  <AddressCard key={a._id} {...a} display="flex" />
                ))
              ) : (
                <AddressForm />
              )}
            </Box>
          
          </Flex>
          <Box w={{base:"100%",md:"38%"}}>
              <PriceDetails
                display={"none"}
                dest="/cart/payment"
                text="Continue"
              />
            </Box>
        </Container>
      </div>
    </>
  );
};

export default Address;
