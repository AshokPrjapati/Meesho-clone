import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineMobile } from "react-icons/ai";
import {
  Dropdown,
  Dropdown1,
  Dropdown2,
  Dropdown4,
  Dropdown5,
  Dropdown6,
  Dropdown7,
  Dropdown8,
  Dropdown3,
} from "./Dropdown";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  ButtonGroup,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState,useContext,useEffect } from "react";
import { AuthContext } from "context/authContext";
import axios from "axios";
import { useRouter } from "next/router";

export const Profile = () => {
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



const getApi=async()=>{
  let res = await axios.get("http://localhost:8080/auth")
  let data=  await res.data;
 return data.isAuth;
}





const Navbar = ({ display = "flex" }) => {

  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const [dropdown5, setdropdown5] = useState(false);
  const [dropdown6, setdropdown6] = useState(false);
  const [dropdown7, setdropdown7] = useState(false);
  const [dropdown8, setdropdown8] = useState(false);
  const router=useRouter()
 
  const {isAuth,logoutUser}=useContext(AuthContext)
  const [data,setData]=useState(false)
  
    
  
   useEffect(()=>{
    getApi()
    .then((res)=>setData(res)).catch((err)=>console.log(err))
   },[data])
  console.log(data)
  
     
   const logout=()=>{
    logoutUser()
    getApi()
    .then((res)=>setData(res)).catch((err)=>console.log(err))
   
   }


  return (
    <div>
      <nav className={styles.nav_1}>
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
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Flex>
                  <Center>
                    <MdManageAccounts />
                    Profile
                  </Center>
                </Flex>
              </MenuButton>
             {
              data?( <MenuList alignItems={"center"}>
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
                <p>Hello User</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>My Orders</MenuItem>
              <MenuItem>Admin Side</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>):(
                <MenuList alignItems={"center"}>
                   <Center>
                <p>Hello User</p>
              </Center>
              <br />
              <Center style={{color:"rgb(102,102,102)"}}>To access your Meesho account</Center>
              <br />
              <a href="./login"><MenuItem style={{background:"rgb(231,48,150)",color:"white",fontSize:"20px",textAlign:"center",fontWeight:"bolder",width:"90%",justifyContent:"center",marginLeft:"10px"}}>Signup</MenuItem></a>

                </MenuList>

            )
             }
            </Menu>
            <Button variant={"ghost"}>
              <AiOutlineShoppingCart /> Cart
            </Button>
          </ButtonGroup>
        </Flex>
      </nav>
      <nav className={styles.nav_2}>
        <Flex
          maxWidth="100%"
          alignItems="center"
          gap="10"
          justify={"center"}
          fontWeight={"semibold"}
          display={display}
        >
          <Text
            onMouseEnter={() => setdropdown(true)}
            onMouseLeave={() => setdropdown(false)}
          >
            Women Ethnic
          </Text>

          <Text
            onMouseEnter={() => setdropdown1(true)}
            onMouseLeave={() => setdropdown1(false)}
          >
            Women Western
          </Text>
          <Text
            onMouseEnter={() => setdropdown2(true)}
            onMouseLeave={() => setdropdown2(false)}
          >
            Men
          </Text>
          <Text
            onMouseEnter={() => setdropdown3(true)}
            onMouseLeave={() => setdropdown3(false)}
          >
            Kids
          </Text>
          <Text
            onMouseEnter={() => setdropdown4(true)}
            onMouseLeave={() => setdropdown4(false)}
          >
            Home & Kitchen
          </Text>
          <Text
            onMouseEnter={() => setdropdown5(true)}
            onMouseLeave={() => setdropdown5(false)}
          >
            Beauty & Health
          </Text>
          <Text
            onMouseEnter={() => setdropdown6(true)}
            onMouseLeave={() => setdropdown6(false)}
          >
            {" "}
            Jewellery & Accessories
          </Text>
          <Text
            onMouseEnter={() => setdropdown7(true)}
            onMouseLeave={() => setdropdown7(false)}
          >
            Bags & Footwear
          </Text>

          <Text
            onMouseEnter={() => setdropdown8(true)}
            onMouseLeave={() => setdropdown8(false)}
          >
            Electronics
          </Text>
        </Flex>
      </nav>
      {dropdown ? <Dropdown setdropdown={setdropdown} /> : null}
      {dropdown1 ? <Dropdown1 setdropdown1={setdropdown1} /> : null}
      {dropdown2 ? <Dropdown2 setdropdown2={setdropdown2} /> : null}
      {dropdown3 ? <Dropdown3 setdropdown3={setdropdown3} /> : null}
      {dropdown4 ? <Dropdown4 setdropdown4={setdropdown4} /> : null}
      {dropdown5 ? <Dropdown5 setdropdown5={setdropdown5} /> : null}
      {dropdown6 ? <Dropdown6 setdropdown6={setdropdown6} /> : null}
      {dropdown7 ? <Dropdown7 setdropdown7={setdropdown7} /> : null}
      {dropdown8 ? <Dropdown8 setdropdown8={setdropdown8} /> : null}
    </div>
  );
};



export default Navbar;
