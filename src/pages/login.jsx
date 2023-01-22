import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Link,
  Heading,
  useColorModeValue,
  Spacer,
  ButtonGroup,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Tooltip,
  Text,
  Center,
} from "@chakra-ui/react";
import styles from "../components/Navbar/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../../context/authContext";
import { AiOutlineMobile } from "react-icons/ai";
import { useState, useContext } from "react";
export default function Login() {
  const [otp, setotp] = useState(false);
  const [num, setnum] = useState("");

  const { authState, loginUser } = useContext(AuthContext);

  const signin = () => {
    loginUser();
  };

  function handlechange(e) {
    setnum(e.target.value);
  }
  const Profile = () => {
    return (
      <div className={styles.download}>
        <h1>Download from</h1>
        <img
          width="200px"
          src="	https://images.meesho.com/images/pow/playstore-icon-big.png"
        />
        <img
          width="200px"
          src="https://images.meesho.com/images/pow/appstore-icon-big.png"
        />
      </div>
    );
  };
  return (
    <div>
      <Flex minWidth="max-content" bg={"#ffffff"} alignItems="center" gap="2">
        <Box p="2" display={"flex"}>
          <Heading size="xl" color={"#f43397"}>
            meesho
          </Heading>
          <InputGroup marginLeft={"20px"}>
            <InputLeftElement
              pointerEvents="none"
              children={<CiSearch color="gray.300" />}
            />
            <Input
              width={"400px"}
              type="text"
              placeholder="Try Saree, Kurti or Search by Product Code"
            />
          </InputGroup>
        </Box>

        <Spacer />

        <ButtonGroup gap="2" className={styles.rightside}>
          <Tooltip hasArrow label={<Profile />} bg="red.600">
            <Flex>
              <Center>
                <AiOutlineMobile />
              </Center>{" "}
              <Text>Download App </Text>{" "}
            </Flex>
          </Tooltip>{" "}
          <div className={styles.border}></div>
          <Text>Become a Supplier</Text> <div className={styles.border}></div>
        </ButtonGroup>
      </Flex>

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Enter your phone number</FormLabel>
                <Input type="text" onChange={handlechange} />
              </FormControl>
              <FormControl display={otp ? "block" : "none"} id="password">
                <FormLabel>Enter your otp</FormLabel>
                <Input type="otp" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={() => {
                    if (num.length != 10) {
                      alert("Please Enter correct phone number");
                    } else setotp(!otp);
                  }}
                  display={otp ? "none" : "block"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Generate otp
                </Button>
                <a href="./">
                  <Button
                    onClick={signin}
                    display={otp ? "block" : "none"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    SignIn
                  </Button>
                </a>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
