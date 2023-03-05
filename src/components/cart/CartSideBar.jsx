import React, { useEffect, useState } from "react";
import { Drawer, DrawerBody, DrawerFooter, Flex, DrawerOverlay, DrawerContent, DrawerCloseButton, Text, Button, Heading, Divider, Image, Stack, } from "@chakra-ui/react";
import Link from "next/link";
import { updateCartProductQuantity } from "@/redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import useToastMsg from "@/custom-hooks/useToast";

const SideBar = ({ isOpen, placement, onClose, btnRef, data }) => {

  const loading = useSelector(store => store.cart.loading);
  const Toast = useToastMsg();
  const token = useSelector(store => store.login.token);
  const dispatch = useDispatch();

  const handleQuantity = (q) => {
    token ? dispatch(updateCartProductQuantity(data._id, q, token, Toast))
      : Toast("You are not authorized to do this operation", "info");
  };


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
                    m={"0 10px"}
                    fontSize="20px"
                    align="center"
                    onClick={() => {
                      data.quantity === 1 ? Toast("Quantity can't be zero") : handleQuantity(data.quantity - 1);
                    }}
                  >
                    -
                  </Button>
                  <Text fontSize={"18px"} fontWeight="400">
                    {data.quantity}
                  </Text>
                  <Button
                    isLoading={loading}
                    m={"0 10px"}
                    fontSize="20px"
                    onClick={() => {
                      handleQuantity(data.quantity + 1);
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
                ₹{data.price * data.quantity}
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
      </Drawer >
    </>
  );
};

export default SideBar;
