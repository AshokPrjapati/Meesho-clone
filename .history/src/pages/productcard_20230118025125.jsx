import React from 'react';
import {Box,Image,Text,Flex, border} from '@chakra-ui/react';
const Productcard = () => {
  let  image="https://images.meesho.com/images/products/162582930/d0yc2_400.jpg"
  let  title="COTTON SLUB KURTI"
    return (
        <div>
            <Box>
              <Image src={image}  alt={title}/>
              <Text pt={"1rem"} pl={"1rem"} fontSize={"1.3rem"} color={"grey"}>{title}</Text>
              <But bg={"grey"} pl={"1rem"} pt={"0.5rem"} pb={"0.5rem"} fontSize={"1rem"} color={"black"}>Free Delivery</But>
              <Flex pl={"1rem"}>
                <div  style={{backgroundColor:"orange",color:"white",fontStyle:"bold",padding:"0.5rem",borderRadius:"6px",fontWeight:"bold"}}>3.3</div>
                <div style={{padding:"0.5rem",color:"grey"}}>4 Reviews</div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
