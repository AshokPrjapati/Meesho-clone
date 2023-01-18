import React from 'react';
import {Box,Image} from '@chakra-ui/react';
const Productcard = () => {
    image="https://images.meesho.com/images/products/162582930/d0yc2_400.jpg"
    title
    return (
        <div>
            <Box>
              <Image src={image}  alt={title}/>
              <Text color={"grey"}>{title}</Text>
              <Flex>
                <div style={{backgroundColor:"orange",color:"white",fontStyle:"bold"}}>3.3</div>
                <div></div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
