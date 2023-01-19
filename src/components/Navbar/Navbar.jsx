import {CiSearch} from "react-icons/ci"
import {MdManageAccounts} from "react-icons/md"
import {AiOutlineShoppingCart,AiOutlineMobile} from "react-icons/ai"

import { Flex, Spacer,Box,Heading,ButtonGroup,Button, InputLeftElement, InputGroup, Input, Tooltip,Text, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react'
import Link from "next/link"
import styles from "./Navbar.module.css"


export const Profile=()=>{
  return(
    <div className={styles.download}>
    <h1>Download from</h1>
    <img width="200px"  src="	https://images.meesho.com/images/pow/playstore-icon-big.png"/>
    <img  width="200px"src="https://images.meesho.com/images/pow/appstore-icon-big.png"/>
  </div>
  )
}

const Navbar = () => {
 
  
  return <div>
<nav className={styles.nav_1}>
<Flex minWidth='max-content'  bg={"#ffffff"} alignItems='center' gap='2'>
  <Box p='2' display={"flex"}>
    <Heading size='xl' color={"#f43397"}>Meesho</Heading>
    <InputGroup marginLeft={"20px"}>
    <InputLeftElement
      pointerEvents='none'
      children={<CiSearch color='gray.300' />}
    />
    <Input width={"400px"} type='text' placeholder='Try Saree, Kurti or Search by Product Code' />
  </InputGroup>
 
  </Box>

  <Spacer />

  <ButtonGroup gap='2' className={styles.rightside} >
  <Tooltip hasArrow label={<Profile/>} bg='red.600'>
  <Flex><Center><AiOutlineMobile/></Center> <Text >Download App  |</Text> </Flex> 
</Tooltip> <div className={styles.border}></div>
<Text >Become a Supplier</Text> <div className={styles.border}></div>
<Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Flex><Center><MdManageAccounts/>Profile</Center></Flex>
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'lg'}
                      src={'https://cdn-icons-png.flaticon.com/128/149/149071.png'}
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
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
    <Button variant={"ghost"} ><AiOutlineShoppingCart/> Cart</Button>
  </ButtonGroup>
 
</Flex>
</nav>
<nav className={styles.nav_2}>

<Flex minWidth='max-content' alignItems='center' gap='20' fontWeight={"semibold"}>
 <div className={styles.hoverplease}>
 <Text >Women Ethnic</Text>


 </div>


<Text>Women Western</Text>
<Text>Men</Text>
<Text>Kids</Text>
<Text>Home & Kitchen</Text>
<Text>Jewellery & Accessories</Text>
<Text>Bags & Footwear</Text>
<Text>Electronics</Text>

</Flex>


{/* <div class="navbar">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
     <p> huwheuh</p>
     <p> <a href="#company">Company</a></p>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
        <a href="#company">Company</a>
      <a href="#team">Team</a>
      <a href="#careers">Careers</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Bring</a>
      <a href="#deliver">Deliver</a>
      <a href="#package">Package</a>
      <a href="#express">Express</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>
  <a href="#contact">Contact</a>
</div> */}

</nav>

<div className={styles.hoveritem}>
<h1>Hello</h1>

</div>
{/* <TableContainer >
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> */}

</div>

  
}
 
export default Navbar


// <div className={styles.logo}>
// <div >
//   <img width="80px" src="./Apni.png" alt="" />
// </div>
// <div className={styles.inputbox}>
// <CiSearch/>
//   <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" /> 

// </div>
// </div>
// <div className={styles.up_righside_btns}>
// <p> Download App  |</p>
// <Link href={""}><p>Become a Supplier  |</p></Link>
// <Link href={""}><p>Profile</p></Link>
// <Link href={""}><p>Cart</p></Link>
// </div>