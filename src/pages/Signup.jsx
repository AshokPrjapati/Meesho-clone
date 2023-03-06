import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  useColorModeValue,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signup } from "@/redux/login/login.action";
import useToastMsg from "@/custom-hooks/useToast";
import Loader from "@/components/Loader/Loader";
import useLoadingIndicator from "@/custom-hooks/useLoadingIndicator";

export default function Login() {
  const loading = useLoadingIndicator();
  const Toast = useToastMsg();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  const router = useRouter();

  const Signup = () => {
    if (!email || !password || !name) return Toast("Please fill all the fields", "error");
    if (password.length < 6) return Toast("Password length must be greater than or equal to 6", "error");
    dispatch(signup({ username: name, email, password }, router, Toast));
  };

  function handlechange(e) {
    setemail(e.target.value);
  }

  return (
    <>
      {loading && <Loader />}
      <div>
        <Flex
          justify={"center"}
          align="center"
          backgroundColor={"pink.50"}
          p="10px"
        >
          <Image
            width={"3%"}
            src="https://cdn-icons-png.flaticon.com/128/9612/9612967.png"
          />
          <Link href="/">
            <Box fontSize={"24px"} fontWeight="bold" color="#f43397">
              ApniDukan
            </Box>
          </Link>
        </Flex>

        <Flex justify={"center"} >
          <Stack spacing={8} mx={"auto"} py={12} px={6} width={["80%", "50%", "30%"]}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} color="#f43397">
                Sign up{" "}
              </Heading>
            </Stack>
            <Box

              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={5}
            >
              <Stack spacing={4} >
                <FormControl id="name">
                  <FormLabel>Enter your name</FormLabel>
                  <Input type="text" onChange={(e) => setname(e.target.value)} />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Enter your email</FormLabel>
                  <Input type="email" onChange={handlechange} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Enter your password</FormLabel>
                  <Input
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    onClick={Signup}
                    bg={"#f43397"}
                    color={"white"}
                    _hover={{
                      bg: "green.500",
                    }}
                  >
                    Signup
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </div>
    </>

  );
}
