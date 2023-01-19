import React from "react";
import { Flex, Box, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";

import AddressFormBody from "./AddressFormBody";

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

const AddressForm = ({ handlePostAddress }) => {
  const [addressObj, setAddressObj] = useState(address);
  const { name, mobile, house, road, pin, city, state, nearby } = addressObj;
  const handleChange = (e) => {
    let val = e.target.value;
    setAddressObj({ ...addressData, [e.target.name]: val });
  };

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
            <Button
              w={"100%"}
              size="lg"
              color={"#fff"}
              bg={"#f43f97"}
              _hover={{ bg: "#f43f97" }}
              fontWeight="500"
              onClick={() => handlePostAddress(addressObj)}
            >
              Save Address and Continue
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddressForm;
