import React from "react";
import { Flex, Box, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";

import AddressFormBody from "./AddressFormBody";
import { useDispatch } from "react-redux";
import { sendAddress } from "@/redux/address/address.action";
import Link from "next/link";

const address = {
  name: "",
  mobile: "",
  house: "",
  road: "",
  pin: +"",
  city: "",
  state: "",
  nearby: "",
};

const AddressForm = () => {
  const [addressObj, setAddressObj] = useState(address);
  const { name, mobile, house, road, pin, city, state, nearby } = addressObj;
  const handleChange = (e) => {
    let val = e.target.value;
    setAddressObj({ ...addressObj, [e.target.name]: val });
  };

  const dispatch = useDispatch();

  return (
    <Flex>
      <Stack w="100%">
        <Box>
          <AddressFormBody
            name={name}
            mobile={mobile}
            house={house}
            road={road}
            pin={pin}
            city={city}
            state={state}
            nearby={nearby}
            handleChange={handleChange}
          />
          <Stack spacing={10} pt={2}>
            <Link href="cart/address">
              <Button
                w={"100%"}
                size="lg"
                color={"#fff"}
                bg={"#f43f97"}
                _hover={{ bg: "#f43f97" }}
                fontWeight="500"
                onClick={() => {
                  dispatch(sendAddress(addressObj));
                }}
              >
                Save Address and Continue
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddressForm;
