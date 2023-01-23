import React from "react";
import Link from "next/link";
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
            <Link href={"#"}>
              {" "}
              <Text fontSize={"22px"} color="gray.600" fontWeight="500">
                wishlist
              </Text>
            </Link>

            <Link href={"#"}>
              <Text
                fontSize={"22px"}
                color="gray.600"
                fontWeight="500"
                ml="10px"
              >
                Cart
              </Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SmallNavbar;
