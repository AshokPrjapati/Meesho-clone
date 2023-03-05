import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Flex,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
  Heading,
  Divider,
  Image,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSelector } from "react-redux";

const SideBar = ({
  isOpen,
  placement,
  onClose,
  btnRef,
  data,
  qty,
  setQty,
  handleTp,
}) => {
  const [price, setPrice] = React.useState(data.price);
  const { cartTotal } = useSelector((store) => store.cart);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize={"20px"} />
          <Heading fontSize={"25px"} fontWeight="normal" p={"10px 20px"}>
            Edit Item
          </Heading>

          <Divider p={"10px 0"} />

          <DrawerBody>
            <Flex pt={"10px"}>
              <Image
                border="1px solid #e1e1e1"
                src={data.image}
                alt=""
                w="76px"
                h="76px"
                objectFit={"cover"}
              />
              <Stack p={"0 10px"} lineHeight="1.5">
                <Text fontSize={"18px"} fontWeight="400">
                  {data.title}
                </Text>
                <Text>₹{data.price}</Text>
                <Flex alignItems={"center"}>
                  <Text fontSize={"18px"} fontWeight="400" p={"0 10px"}>
                    Qty
                  </Text>
                  <Button
                    disabled={qty === 1}
                    m={"0 10px"}
                    fontSize="20px"
                    align="center"
                    onClick={() => {
                      setPrice(price - data.price);
                      setQty(qty - 1);
                      handleTp(-data.price);
                    }}
                  >
                    -
                  </Button>
                  <Text fontSize={"18px"} fontWeight="400">
                    {qty}
                  </Text>
                  <Button
                    m={"0 10px"}
                    fontSize="20px"
                    onClick={() => {
                      setPrice(price + data.price);
                      setQty(qty + 1);
                      handleTp(data.price);
                    }}
                  >
                    +
                  </Button>
                </Flex>
              </Stack>
            </Flex>
            <Divider p={"10px 0"} />
            <Flex pt={"10px"} justify={"space-between"}>
              <Text fontSize={"18px"} fontWeight="400">
                Total Price
              </Text>
              <Text fontSize={"18px"} fontWeight="400">
                ₹{cartTotal}
              </Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              w={"100%"}
              size="lg"
              color={"#fff"}
              bg={"#f43f97"}
              _hover={{ bg: "#f43f97" }}
            >
              <Link style={{ width: "100%" }} href="/cart/address">
                Continue
              </Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
