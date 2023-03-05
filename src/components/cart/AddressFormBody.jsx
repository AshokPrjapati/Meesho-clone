import React, { useEffect } from "react";
import { Flex, Box, FormControl, FormLabel, Input, HStack, Stack, Heading, Select } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { GoLocation } from "react-icons/go";

const AddressFormBody = ({ name, mobile, house, road, pin, city, state, nearby, handleChange }) => {

  return (
    <Stack spacing={4}>
      <Heading fontSize={"lg"} textAlign={"left"} fontWeight="500">
        <PhoneIcon /> Contact Info
      </Heading>
      <FormControl id="name" isRequired>
        <FormLabel fontSize={"14px"}>Name</FormLabel>
        <Input
          size="sm"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="mobile" isRequired>
        <FormLabel fontSize={"14px"}>Phone Number</FormLabel>
        <Input
          size="sm"
          type="number"
          name="mobile"
          value={mobile}
          onChange={handleChange}
        />
      </FormControl>
      <Flex
        fontSize={"lg"}
        textAlign={"left"}
        fontWeight="500"
        align={"center"}
      >
        <GoLocation /> <span style={{ marginLeft: "5px" }}>Location</span>
      </Flex>
      <FormControl id="house" isRequired>
        <FormLabel fontSize={"14px"}>House no./Building name</FormLabel>
        <Input
          size="sm"
          type="text"
          name="house"
          value={house}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="road" isRequired>
        <FormLabel fontSize={"14px"}>Road name/Area/Colony</FormLabel>
        <Input
          size="sm"
          type="text"
          name="road"
          value={road}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="pin" isRequired>
        <FormLabel fontSize={"14px"}>Pincode</FormLabel>
        <Input
          size="sm"
          type="number"
          name="pin"
          value={pin}
          onChange={handleChange}
        />
      </FormControl>
      <HStack>
        <Box>
          <FormControl id="city" isRequired>
            <FormLabel fontSize={"14px"}>City</FormLabel>
            <Input
              size="sm"
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="lastName" isRequired>
            <FormLabel fontSize={"14px"}>State</FormLabel>
            <Select
              size={"sm"}
              type="text"
              name="state"
              value={state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Hariyana">Hariyana</option>
              <option value="Chattisgarh">Chattisgarh</option>
            </Select>
          </FormControl>
        </Box>
      </HStack>
      <FormControl id="location">
        <FormLabel fontSize={"14px"}>Nearby Location</FormLabel>
        <Input
          size="sm"
          type="text"
          name="nearby"
          value={nearby}
          onChange={handleChange}
        />
      </FormControl>
    </Stack>
  );
};

export default AddressFormBody;
