import React from 'react';
import {Box,Image,Text,Flex, border, Button} from '@chakra-ui/react';
const Productcard = ({image,price,title,rating}) => {
    title = title.split(" ")
    if(title.length>3){
     title = title.slice(0, 3).join(" ") 
    }
    let x;
    if(rating>3.5){
        x="orange"
    }else{
        x="green"
    }
    return (
        <div>
            <Box bg={"whitesmoke"} borderRadius={"10px"} h={{base:'50vh',sm:'50vh',lg:'vh'}} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}  padding={"1rem"}>
              <Image h={"35vh"} w={"100%"} src={image}  alt={title}/>
              <Text  pt={"1rem"} pl={"1.1rem"} fontWeight={"bold"} fontSize={"1rem"} color={"grey"}>{title}</Text>
              <Flex>
              <Text  color={"black"} pt={"0.6rem"} pl={"1.3rem"} fontSize={"1.3rem"} fontWeight={"bolder"} c={"black"}>₹{price} </Text>
              <Text pl={"0.5rem"}  pt={"0.6rem"} color={"grey"}>onwards</Text>
              </Flex>
           
              <Button border={"0px"} m={"0.8rem"} p={"0.2rem"}>Free Delivery</Button>
              
              <Flex pl={"1rem"}>
                <div  style={{backgroundColor:x,color:"white",fontStyle:"bold",padding:"0.5rem",borderRadius:"16px",fontWeight:"bold"}}>{rating} ★ </div>
                <div style={{padding:"0.5rem",color:"grey"}}>4 Reviews</div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
