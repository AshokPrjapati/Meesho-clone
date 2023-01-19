import React from 'react';
import { Container,Flex,Box, Grid } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <GridItem  height={"110rem"}>
            <Box w={"30%"} bg={"green"} height={"60%"}></Box>
            <Box w={"70%"} bg={"orange"} height={"80%"}></Box>
            </GridItem> 
        </Container>
    );
}

export default Productpage;
