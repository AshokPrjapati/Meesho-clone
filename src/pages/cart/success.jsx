import PaymentCard from "@/components/cart/PaymentCard";
import PriceDetails from "@/components/cart/PriceDetails";
import Navbar from "@/components/Navbar/Navbar";
import { getAddress } from "@/redux/address/address.action";
import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useSelector } from "react-redux";

const Success = ({ addressData }) => {
  const { orderData } = useSelector((store) => store.cart);
  // const { addressData } = useSelector((store) => store.address);
  const sa = addressData.map((a) => {
    if (a.selected === true) return a;
  });

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAddress());
  // }, []);

  return (
    <>
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
              <Text>Order Id : {`#${orderData.orderId}`}</Text>
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
              {orderData?.products.map((props) => (
                <Stack
                  key={props.id}
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
              ))}
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
              <PriceDetails
                display={"flex"}
                dest="/"
                text="Continue Shopping"
              />
            </Box>
          </Flex>
        </Container>
      </div>
      ;
    </>
  );
};

export async function getServerSideProps(context) {
  let res = await axios.get(`http://localhost:8080/address`);
  let data = await res.data;
  return {
    props: {
      addressData: data,
    }, // will be passed to the page component as props
  };
}

export default Success;
