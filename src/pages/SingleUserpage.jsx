import React from 'react';
import {Flex,Box,Image,Text, Button} from "@chakra-ui/react"
const SingleUserpage = () => {
    let image = "https://images.meesho.com/images/products/164879218/vouum_512.webp"
    let price = 253
    let title = "Body feet"
    return (
        <div>
        <Flex m={"auto"} w={"80%"}  gap={"2%"} >
      <Box w={"47%"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>
          <Image w={"70%"}  src='https://images.meesho.com/images/products/139079126/5aq8z_512.webp'/>
          <Flex justifyContent={"center"} gap={"1rem"}>
            <Button>Add to Cart</Button>
            <Button bg={"rgb(244, 51, 151)"} color={"white"}>Buy Now</Button>
          </Flex>
      </Box>
      <Box w={"47%"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>    
     <Box p={"8px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} h={"20vh"}>
      <Text m={"1px"} color={"grey"} fontWeight={"bold"}>Baby Bodycon Gown With Purse Dresses
</Text>
<Text mt={"6px"} as='h2' fontSize={"2xl"} fontWeight={"bold"}>₹253
</Text>
<Box m={"5px"} borderRadius={"15px"} textAlign={"center"}  w={"80px"}  bgColor={"whitesmoke"} fontSize={"12px"} p={"1.3px"}>Free Delivery</Box>
     </Box>
     <br/>
     <Box padding={"4px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} >
      <Text  fontSize={"xl"} color={"black"}>Product Details
</Text>
<Box fontWeight={"md"} color={"grey"}>
<Text>Name:{title}</Text>
<Text>Fabric : Cotton</Text>
<Text>Sleeve Length : Sleeveless
</Text>
<Text>Pattern : Embellished
</Text>

Net Quantity (N) : Single
<Text>Net Quantity (N) : Single</Text>
Sizes : 
<Text>6-9 Months (Bust Size : 18 in, Length Size: 19 in)
</Text>
<Text>6-12 Months (Bust Size : 18 in, Length Size: 19 in)
</Text>
<Text>18-24 Months (Bust Size : 20 in, Length Size: 19 in)
</Text>
<Text>1-2 Years (Bust Size : 18 in, Length Size: 19 in)
</Text>
<Text>2-3 Years (Bust Size : 20 in, Length Size: 20 in)
</Text>
<Text>3-4 Years (Bust Size : 22 in, Length Size: 20 in)
</Text>
<Text>5-6 Years (Bust Size : 26 in, Length Size: 21 in)
</Text>
<Text>Country of Origin : India
</Text>
</Box>

     </Box>
     <br/>
     <Flex gap={"0.5%"}  h={"20vh"}>
      <Flex p={"2px"} m={"auto"} w={"32%"} bg={"rgb(231, 238, 255)"}>
        <Image ml={"4px"} w={"60%"} src='https://images.meesho.com/images/value_props/lowest_price_pbd.png'/>
        <Text m={"auto"} fontWeight={"bold"} >Lowest Price</Text>
      </Flex>
      <Flex p={"4px"} m={"auto"} w={"32%"} bg={"rgb(231, 238, 255)"}>
        <Image ml={"4px"} w={"60%"} src='https://images.meesho.com/images/value_props/cash_on_delivery_pbd.png'/>
        <Text m={"auto"} fontWeight={"bold"}>Cash on Delivery</Text>
      </Flex>
      <Flex p={"4px"}   m={"auto"} w={"32%"} bg={"rgb(231, 238, 255)"}>
        <Image ml={"4px"} w={"60%"} src='https://images.meesho.com/images/value_props/7_day_returns_pbd.png'/>
        <Text m={"auto"} fontWeight={"bold"}>7-days return</Text>

      </Flex>
     </Flex>
     <Box padding={"10px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>
     <Text color={"grey"}>Best quality products from trusted suppliers</Text>   
     </Box>
      </Box>
        </Flex>
        </div>
    );
}

export default SingleUserpage;