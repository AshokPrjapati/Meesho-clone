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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCartTotal, order } from "@/redux/cart/cart.action";
import useToastMsg from "@/custom-hooks/useToast";
import { useEffect, useState } from "react";
import useLoadingIndicator from "@/custom-hooks/useLoadingIndicator";
import Loader from "../Loader/Loader";

const PaymentDetails = () => {
  const loading = useLoadingIndicator();
  const { cartTotal, cartProducts } = useSelector((store) => store.cart);
  const token = useSelector(store => store.login.token);
  const Toast = useToastMsg();
  const dispatch = useDispatch();
  const router = useRouter();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    cartPrice();
  }, [])

  const cartPrice = () => {
    token ? dispatch(getCartTotal(token, Toast)) : Toast("Please login/signup", "error");
  }

  const placeOrder = () => {
    if (token) {
      cartProducts.length ? dispatch(order(token, Toast, router, setLoad)) : Toast("Nothing in cart. Please add something to order", "info");
    } else {
      Toast("Please login first", "info");
      router.push("/login");
    }
  }

  return (
    <>
      {loading && <Loader />}
      <Stack p={"10px 20px"} lineHeight={8}>
        <Text fontSize={"17px"} fontWeight={"500"}>
          Price Details
        </Text>
        <Flex justify={"space-between"}>
          <Text>Total Product Price</Text>
          <Text>₹{cartTotal}</Text>
        </Flex>
        <Flex justify={"space-between"}>
          <Text>Total Discount</Text>
          <Text>₹0</Text>
        </Flex>
        <Divider colorScheme={"whatsapp"} p={"5px"} />
        <Flex justify={"space-between"}>
          <Text fontSize={"17px"} fontWeight={"500"}>
            Order Total
          </Text>
          <Text fontSize={"17px"} fontWeight={"500"}>
            {cartTotal}
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
          <StarIcon mr="5px" /> Yay! Your Total Discount is ₹0
        </Button>
        <Text fontSize={"12px"} textAlign="center">
          Clicking on `Continue`` will place order
        </Text>

        <Button
          isLoading={load}
          loadingText={"Ordering..."}
          size="lg"
          color={"#fff"}
          bg={"#f43f97"}
          _hover={{ bg: "#f43f97" }}
          onClick={placeOrder}
        >
          Place Order
        </Button>

        <Box pt={"20px"}>
          <Image src="https://images.meesho.com/images/marketing/1588578650850.webp" />
        </Box>
      </Stack>
    </>

  );
};

export default PaymentDetails;
