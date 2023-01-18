import { StarIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";

const PriceDetails = () => {
  return (
    <Stack p={"20px"} lineHeight={8}>
      <Text fontSize={"17px"} fontWeight={"500"}>
        Price Details
      </Text>
      <Flex justify={"space-between"}>
        <Text>Total Product Price</Text>
        <Text>₹456</Text>
      </Flex>
      <Flex justify={"space-between"}>
        <Text>Total Discount</Text>
        <Text>₹456</Text>
      </Flex>
      <Divider colorScheme={"whatsapp"} p={"5px"} />
      <Flex justify={"space-between"}>
        <Text fontSize={"17px"} fontWeight={"500"}>
          Order Total
        </Text>
        <Text fontSize={"17px"} fontWeight={"500"}>
          ₹456
        </Text>
      </Flex>
      <Button
        w="100%"
        sixe="xl"
        bg={"#d3f4ea"}
        color={"#038d63"}
        _hover={{ bg: "none" }}
        pointerEvents="none"
        borderRadius={0}
      >
        <StarIcon mr="5px" /> Yay! Your Total Discount is ₹9
      </Button>
      <Text fontSize={"12px"} textAlign="center">
        Clicking on `Continue`` will not deduct any money
      </Text>
      <Button
        size="lg"
        color={"#fff"}
        bg={"#f43f97"}
        _hover={{ bg: "#f43f97" }}
      >
        Continue
      </Button>
      <Box pt={"20px"}>
        <Image src="https://images.meesho.com/images/marketing/1588578650850.webp" />
      </Box>
    </Stack>
  );
};

export default PriceDetails;
