
import React from 'react'
import Link from "next/link"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const SmallNavbar = () => {
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
                  <Link href="/products"> Women Ethnic</Link>
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
            <Link href="/">
            ApniDukan </Link>
          </Heading>
        </Box>

        <Box>
          <Flex>
          


          <Box>
            
            <Flex >
              
               <Link href={"#"}> <Box fontSize={"22px"} marginTop="5px" color="gray.600" fontWeight="500"><AiOutlineHeart /></Box></Link>
            
       
          <Link href={"/cart"}><Box fontSize={"22px"} color="gray.600" fontWeight="500" ml="10px" mt="5px"><AiOutlineShoppingCart /></Box></Link>
            
            </Flex> 
            </Box>
        </Flex>
    </Box>
    </Flex>
    </div>
  );
};

export default SmallNavbar;
