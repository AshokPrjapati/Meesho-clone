import PaymentCard from "@/components/cart/PaymentCard";
import PriceDetails from "@/components/cart/PriceDetails";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";
import useLoadingIndicator from "@/custom-hooks/useLoadingIndicator";
import useToastMsg from "@/custom-hooks/useToast";
import { getAddress } from "@/redux/address/address.action";
import { StarIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Success = () => {
  const loading = useLoadingIndicator();
  const { orderData, orderTotal } = useSelector((store) => store.cart);
  const token = useSelector(store => store.login.token);
  const Toast = useToastMsg();
  const router = useRouter()
  const sa = useSelector((store) => store.address.addressData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress(token, Toast));
  }, []);

  console.log(orderData);

  return (
    <>
      {loading && <Loader />}
      <Head>
        <title>ApniDukan-Succes page</title>
        <meta name="description" content="Apni dukan success page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar display="none" />
        <Container maxW={"4xl"} p={"20px 15px"}>
          <Alert status="success">
            <AlertIcon />
            <HStack justify={"space-around"}>
              <Text>Thanks for shopping with us !</Text>
              {orderData.length ? <Text>Order Id : {`#${Date.now()}`}</Text> : null}
            </HStack>
          </Alert>
          <Flex>
            <Box
              w="62%"
              paddingRight="20px"
              borderRight={"1px solid #e1e1e1"}
              mt="10px"
            >
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>Order Details</Text>
              </Flex>
              {orderData.length ? orderData.map((props) => (
                <Stack
                  key={props._id}
                  padding={"10px"}
                  marginBottom={"15px"}
                  border={"1px solid #e1e1e1"}
                  borderRadius="5px"
                >
                  <Flex justify={"space-between"}>
                    <Flex w="90%">
                      <Image
                        src={props.image}
                        alt=""
                        w="76px"
                        h="76px"
                        objectFit={"cover"}
                      />
                      <Stack p={"0 10px"} lineHeight="1.5">
                        <Text fontSize={"16px"} fontWeight={"500"}>
                          {props.title}
                        </Text>
                        {/* <Text>Qty : {qty}</Text> */}
                        <Text>₹{props.price}</Text>
                      </Stack>
                    </Flex>
                  </Flex>
                  <Flex
                    justify={"space-between"}
                    p={"10px 0"}
                    borderTop="1px solid #e1e1e1"
                  >
                    <Text fontSize={"16px"} fontWeight={"500"} color={"grey"}>
                      Supplier : Deepti Creations
                    </Text>
                    <Text fontSize={"16px"} fontWeight={"500"} color={"grey"}>
                      Free Delivery
                    </Text>
                  </Flex>
                </Stack>
              )) : null}
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
                justify="space-between"
              >
                <Text>Delivery Address </Text>
              </Flex>
              <Stack
                padding={"10px"}
                marginBottom={"15px"}
                border={"1px solid #e1e1e1"}
                borderRadius="5px"
                bg="#e7eeff"
              >
                {sa.length ? (
                  <Stack p={"0 10px"} lineHeight="1.5">
                    <Text fontSize={"lg"} fontWeight={500}>
                      {sa[0].name}
                    </Text>
                    <Box fontWeight={500}>
                      <Text>
                        {sa[0].house}, {sa[0].road}, {sa[0].city}
                      </Text>
                      <Text>
                        {sa[0].state} - {sa[0].pin},
                      </Text>
                      <Text>{sa[0].nearby}</Text>
                      <Text>+91 {sa[0].mobile}</Text>
                    </Box>
                  </Stack>
                ) : (
                  "Address not available"
                )}
              </Stack>
              <Flex
                fontSize={"18px"}
                fontWeight="500"
                color={"#000"}
                padding={"15px 0"}
              >
                <Text>Payment Method</Text>
              </Flex>
              <PaymentCard />
            </Box>
            <Box w="38%">
              <Stack p={"10px 20px"} lineHeight={8}>
                <Text fontSize={"17px"} fontWeight={"500"}>
                  Price Details
                </Text>
                <Flex justify={"space-between"}>
                  <Text>Total Product Price</Text>
                  <Text>₹{orderTotal}</Text>
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
                    {orderTotal}
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
                  Clicking on `Continue`` will not deduct any money
                </Text>

                <Button
                  size="lg"
                  color={"#fff"}
                  bg={"#f43f97"}
                  _hover={{ bg: "#f43f97" }}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Continue Shopping
                </Button>

                <Box pt={"20px"}>
                  <Image src="https://images.meesho.com/images/marketing/1588578650850.webp" />
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </div>
      ;
    </>
  );
};

// export async function getServerSideProps() {
//   let res = await axios.get(`http://localhost:8080/address`);
//   let data = await res.data;
//   return {
//     props: {
//       addressData: data,
//     }, // will be passed to the page component as props
//   };
// }

export default Success;
