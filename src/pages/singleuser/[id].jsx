import React from 'react';
import {Flex,Box,Image,Text, Button, SimpleGrid} from "@chakra-ui/react"
import Link from 'next/link';
import { useRouter } from 'next/router';
const SingleUserpage = ({product}) => {
  console.log(product)
    let image = product.image
    let price = product.price
    let title = product.title
    let desc = product.description
    return (



<div>
        <SimpleGrid columns={{base:1,sm:1,md:1,lg:2,xl:2}} m={"auto"} w={"90%"} margin={"auto"}  gap={"3%"} >
      <Box alignContent={"center"}  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>
          <Image m={"auto"} w={"70%"}  src={image}/>
          <br/>
          <Flex m={"auto"}  w={"50%"}>
          <Button marginRight={"5px"}>Add to Cart</Button>
            <Button bg={"rgb(244, 51, 151)"} color={"white"}>Buy Now</Button>
          </Flex>
           
      </Box>
      <Box  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>    
     <Box p={"8px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} h={"20vh"}>
      <Text m={"1px"} color={"grey"} fontWeight={"bold"}>{title}
</Text>
<Text mt={"6px"} as='h2' fontSize={"2xl"} fontWeight={"bold"}>₹{price}
</Text>
<Box m={"5px"} borderRadius={"15px"} textAlign={"center"}  w={"80px"}  bgColor={"whitesmoke"} fontSize={"12px"} p={"1.3px"}>Free Delivery</Box>
     </Box>
     <br/>
     <Box padding={"4px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} >
      <Text  fontSize={"xl"} color={"black"}>Product Details
</Text>
<Box fontWeight={"md"} color={"grey"}>
  <Text>{desc}</Text>
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
        </SimpleGrid>
        </div>
    );
}

export async function getStaticPaths (){
  let r = await fetch("https://lazy-erin-caridea-veil.cyclic.app/products")
  let d = await r.json();
  return{
    paths: d.map((product)=>({params: {id: String(product.id)}})),
    fallback:false
  }
}

export async function getStaticProps (context) {
  let id = context.params.id;
  let r = await fetch(`https://lazy-erin-caridea-veil.cyclic.app/products/${id}`)
  let d = await r.json();
  return {
    props:{
      product:d,
    },
  }
}
export default SingleUserpage;
