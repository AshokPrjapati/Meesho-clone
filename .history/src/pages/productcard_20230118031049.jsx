import React from 'react';
import {Box,Image,Text,Flex, border, Button} from '@chakra-ui/react';
const Productcard = () => {
  let  image="https://images.meesho.com/images/products/162582930/d0yc2_400.jpg"
  let  title="COTTON SLUB KURTI"
  let price="550"
    return (
        <div>
            <Box>
              <Image src={image}  alt={title}/>
              <Text pt={"1rem"} pl={"1rem"} fontSize={"1.3rem"} color={"grey"}>{title}</Text>
              <Flex>
              <Text color={"black"} pt={"0.6rem"} pl={"1rem"} fontSize={"1.3rem"} fontWeight={"bold"} c={"black"}>₹{price} </Text>
              <Text pl={"0.5rem"}  pt={"0.6rem"} color={"grey"}>onwards</Text>
              </Flex>
           
              <Button border={"0px"} m={"0.8rem"} p={"0.2rem"}>Free Delivery</Button>
              
              <Flex pl={"1rem"}>
                <div  style={{backgroundColor:"rgb(244, 182, 25)",color:"white",fontStyle:"bold",padding:"0.5rem",borderRadius:"16px",fontWeight:"bold"}}>3.3 ★ </div>
                <div style={{padding:"0.5rem",color:"grey"}}>4 Reviews</div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
