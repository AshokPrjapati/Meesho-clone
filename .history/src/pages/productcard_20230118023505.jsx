import React from 'react';
import {Box,Image,Text,Flex} from '@chakra-ui/react';
const Productcard = () => {
  let  image="https://images.meesho.com/images/products/162582930/d0yc2_400.jpg"
  let  title="vedprakash"
    return (
        <div>
            <Box>
              <Image src={image}  alt={title}/>
              <Text fontSize={"2rem"} color={"grey"}>{title}</Text>
              <Flex p=>
                <div style={{backgroundColor:"orange",color:"white",fontStyle:"bold"}}>3.3</div>
                <div></div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
