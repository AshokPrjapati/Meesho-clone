import React from 'react';
import { Container,Flex,Box, Grid, GridItem } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <Grid  height={"110rem"}>
            <Grid w={"30%"} bg={"green"} height={"60%"}></Grid>
            <Box w={"70%"} bg={"orange"} height={"80%"}></Box>
            </Grid> 
        </Container>
    );
}

export default Productpage;
