import React from 'react';
import {Box,Image} from '@chakra-ui/react';
const Productcard = () => {
    return (
        <div>
            <Box>
              <Image src={image}  alt={title}/>
              <Text color={"grey"}>{title}</Text>
              <Flex>
                <div style={{backgroundColor:"o"}}></div>
                <div></div>
              </Flex>
            </Box>
        </div>
    );
}

export default Productcard;
