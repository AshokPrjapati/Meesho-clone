import React from 'react';
import { Container,Flex,Box, Grid, GridItem } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <Grid  height={"110rem"}>
            <GridItem w={"30%"} bg={"green"} height={"60%"}></GridItem>
            <Grid w={"70%"} bg={"orange"} height={"80%"}></Grid>
            </Grid> 
        </Container>
    );
}

export default Productpage;
