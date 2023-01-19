import React from 'react';
import {Box,Image,Text,Flex, border, Button} from '@chakra-ui/react';
const Productcard = ({image,price,title,rating}) => {
    title = title.split(" ")
    if(title.length>3){
     title = title.slice(0, 3).join(" ") 
    }
    let state;
    if(rating>3.5){
        state=
    }
    
    return (
        <div>
            <Box h={"70vh"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}  padding={"1rem"}>
              <Image h={"35vh"} w={"100%"} src={image}  alt={title}/>
              <Text  pt={"1rem"} pl={"1rem"} fontSize={"1.3rem"} color={"grey"}>{title}</Text>
              <Flex>
              <Text  color={"black"} pt={"0.6rem"} pl={"1rem"} fontSize={"1.3rem"} fontWeight={"bold"} c={"black"}>₹{price} </Text>
              <Text pl={"0.5rem"}  pt={"0.6rem"} color={"grey"}>onwards</Text>
              </Flex>
           
              <Button border={"0px"} m={"0.8rem"} p={"0.2rem"}>Free Delivery</Button>
              
              <Flex pl={"1rem"}>
                <div  style={{backgroundColor:{state},color:"white",fontStyle:"bold",padding:"0.5rem",borderRadius:"16px",fontWeight:"bold"}}>{rating} ★ </div>
                <div style={{padding:"0.5rem",color:"grey"}}>4 Reviews</div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
