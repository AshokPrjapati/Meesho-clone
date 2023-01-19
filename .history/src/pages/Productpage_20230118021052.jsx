import React from 'react';
import { Container,Flex,Box } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <Flex flexWrap={"wrap-reverse"} height={"120rem"}>
            <Box w={"30%"} bg={"green"} height={"60%"}></Box>
            <Box w={"70%"} bg={"orange"} height={"80%"}></Box>
            </Flex> 
        </Container>
    );
}

export default Productpage;
