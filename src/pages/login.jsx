import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Heading,
  useColorModeValue,
  Text,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "@/redux/login/login.action";
import useToastMsg from "@/custom-hooks/useToast";
export default function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Toast = useToastMsg();
  const dispatch = useDispatch();

  const router = useRouter();

  const signin = () => {
    dispatch(login({ email, password }, router, Toast));
  };

  function handlechange(e) {
    setemail(e.target.value);
  }

  return (
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

      <Flex minH={"100vh"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color="#f43397">
              Sign in{" "}
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={3}>
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
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link href="/login" color="#f43397">
                    Forgot password?
                  </Link>
                </Stack>

                <Button
                  onClick={signin}
                  bg={"#f43397"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >

                  SignIn
                </Button>
                <Text>If you are not a registered user?</Text>
              </Stack>
            </Stack>
          </Box>

          <Button
            bg={"#f43397"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
          >
            <Link href="/Signup">
              Create your Account here</Link>
          </Button>
        </Stack>
      </Flex>
    </div>
  );
}
