import CartNav from "@/components/cart/CartNav";
import { cartPriceContext } from "@/Contexts/CartPrice";
import Head from "next/head";
import React, { useContext, useState } from "react";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  Text,
  Button,
  Flex,
  Image,
  Box,
  Container,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import PriceDetails from "@/components/cart/PriceDetails";
import AddressCard from "@/components/cart/AddressCard";
import AddressForm from "@/components/cart/AddressForm";
import axios from "axios";
import AddressSideBar from "@/components/cart/AddressSideBar";

const Address = ({ address }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [addressData, setAddressData] = useState(address);
  const display = "none";

  const handlePostAddress = async (data) => {
    try {
      let res = await axios.post(`http://localhost:8080/address`, data);
      let rr = await res.data;
      let newRes = await axios.get(`http://localhost:8080/address`, data);
      let newData = await res.data;
      setAddressData(newData);
    } catch (error) {
      alert(error);
    }
  };

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
                addressData.map((a) => <AddressCard key={a.id} />)
              ) : (
                <AddressForm handlePostAddress={handlePostAddress} />
              )}
            </Box>
            <Box w="38%">
              <PriceDetails display={display} />
            </Box>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let res = await axios.get("http://localhost:8080/address");
  let address = await res.data;
  console.log(address);

  return {
    props: {
      address,
    },
  };
}

export default Address;
