import React from 'react';
import { Container,Flex,Box } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <Flex>
            <Box w={"30%"} borderColor={"red"} height={"60%"}>hello</Box>
            <Box w={"70%"} borderColor={"red"} height={"80%"}></Box>
            </Flex> 
        </Container>
    );
}

export default Productpage;
