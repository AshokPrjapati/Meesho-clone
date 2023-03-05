import { Box, Button, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import AddressSideBar from "./AddressSideBar";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { editAddress } from "@/redux/address/address.action";

const AddressCard = ({
  _id,
  name,
  house,
  road,
  city,
  state,
  pin,
  mobile,
  nearby,
  handlePatchAddress,
  display = flex,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();

  return (
    <Stack
      padding={"10px"}
      marginBottom={"15px"}
      border={"1px solid #e1e1e1"}
      borderRadius="5px"
      bg="#e7eeff"
    >
      <AddressSideBar
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        handleFn={handlePatchAddress}
      />

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
        <Button
          w={"max-content"}
          color={"#f43f97"}
          size={"md"}
          bg={"none"}
          fontWeight="bold"
          _hover={{
            bg: "none",
          }}
          p={0}
          onClick={onOpen}
          ref={btnRef}
        >
          EDIT
        </Button>
        <Button
          w={"100%"}
          size="lg"
          color={"#fff"}
          bg={"#f43f97"}
          _hover={{ bg: "#f43f97" }}
          textAlign="left"
          display={display}
        >
          <Link href={"/cart/payment"}> Deliver to this Address</Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddressCard;
