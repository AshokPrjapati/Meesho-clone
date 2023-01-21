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
} from "@chakra-ui/react";
import Link from "next/link";
import AddressFormBody from "./AddressFormBody";

const AddressSideBar = ({ isOpen, placement, onClose, btnRef, handleFn }) => {
  return (
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
        <Heading fontSize={"2xl"} fontWeight={"500"} p={"5px 20px"}>
          Edit Address
        </Heading>

        <Divider p={"5px 0"} />

        <DrawerBody>
          <AddressFormBody />
        </DrawerBody>

        <DrawerFooter>
          <Button
            w={"100%"}
            size="lg"
            color={"#fff"}
            bg={"#f43f97"}
            _hover={{ bg: "#f43f97" }}
            onClick={() => {
              handleFn();
            }}
          >
            <Link style={{ width: "100%" }} href="/cart/payment">
              Save Address and Continue
            </Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddressSideBar;
