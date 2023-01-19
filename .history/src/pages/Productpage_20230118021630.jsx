import React from 'react';
import { Container,Flex,Box } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <Flex gap={"0.4%"} flexWrap={"wrap"} height={"120rem"}>
            <Box w={"23.6%"} bg={"green"} height={"60%"}></Box>
            <Box w={"74%"} bg={"orange"} height={"80%"}></Box>
            </Flex> 
        </Container>
    );
}

export default Productpage;
