
import React,{useState} from 'react'
import Link from "next/link"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Flex, Spacer, Box, Heading, ButtonGroup, Button, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem,IconButton,Text } from "@chakra-ui/react";
import { MdManageAccounts } from "react-icons/md";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect } from "react"
import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { logout } from "@/redux/login/login.action";
import useToastMsg from "@/custom-hooks/useToast";
const SmallNavbar = () => {
  
  const Toast = useToastMsg();
  const router = useRouter();
  const [data, setData] = useState({});
  const dispatch = useDispatch()
  const user = useSelector(store => store.login.credentials);

  useEffect(() => {
    setData(user)
  }, []);

  const signout = async () => {
    if (user.email) dispatch(logout(user.email, Toast));
    setData({})
  };
  const movetoadmin=()=>{
    router.push("/admin")
  }

  return (
    <div>
      <Flex
        minWidth="max-content"
        bg={"#ffffff"}
        alignItems="center"
        shadow={"base"}
        justifyContent={"space-between"}
        p="10px"
      >
        <Box p="2" display={"flex"}>
          <Heading size="lg" color={"#f43397"}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList fontSize={"14px"}>
                <MenuItem>
                  <Link href={"#"}> Women Ethnic</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"#"}> Women Western</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"#"}>Men</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"#"}> Kids</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"#"}> Home & Kitchen</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"#"}> Beauty & Health</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            ApniDukan
          </Heading>
        </Box>

        <Box>
          <Flex>
          <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                w={"80px"}
                
              >
                <Flex>
                  <Center>
                    <MdManageAccounts />
                    Profile
                  </Center>
                </Flex>
              </MenuButton>
              {data.token ? (
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"lg"}
                      src={
                        "https://cdn-icons-png.flaticon.com/128/149/149071.png"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{data.username}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  {data.role == "ADMIN" ? <MenuItem onClick={movetoadmin}>Admin panel</MenuItem> : null}

                  <MenuItem>My Orders</MenuItem>
                  <MenuItem onClick={signout}>Logout</MenuItem>
                </MenuList>
              ) : (
                <MenuList alignItems={"center"} >

                  <MenuItem width="90%" justifyContent={"center"}
                    backgroundColor={"rgb(231,48,150)"} margin="10px" color="white">Hello User  </MenuItem>
                  <a href="/login">
                    <MenuItem
                      style={{
                        background: "rgb(231,48,150)",
                        color: "white",
                        fontSize: "20px",

                        fontWeight: "bolder",
                        width: "90%",
                        justifyContent: "center",
                        marginLeft: "10px",
                      }}
                    >
                      Login
                    </MenuItem>
                  </a>
                  <a href="/Signup">
                    <MenuItem
                      style={{
                        margin: "5px",
                        background: "rgb(231,48,150)",
                        color: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        fontWeight: "bolder",
                        width: "90%",
                        justifyContent: "center",
                        marginLeft: "10px",
                      }}
                    >
                      Signup
                    </MenuItem>
                  </a>
                </MenuList>
              )}
            </Menu>
           


          <Box>
            
            <Flex >
              
               <Link href={"#"}> <Box fontSize={"22px"} marginTop="10px" color="gray.600" fontWeight="500"><AiOutlineHeart /></Box></Link>
            
       
               <Button
              variant={"ghost"}
              onClick={() => {
                if (data.token) router.push("/cart");
                else Toast("Please Login/Signup to access cart", "error");
              }}
            >
              <Flex align="center" w={"20px"}>
                <AiOutlineShoppingCart size={"lg"}/>
              </Flex>
            </Button>
            
            </Flex> 
            </Box>
        </Flex>
    </Box>
    </Flex>
    </div>
  );
};

export default SmallNavbar;
