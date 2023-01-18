import React from 'react';
import { Container,Flex,Box, Grid, GridItem } from '@chakra-ui/react';
const Productpage = () => {
    return (
        <Container>
           <Grid columns={[2,1]}  height={"110rem"}>
            <GridItem w={"30%"} bg={"green"} height={"60%"}></GridItem>
            <GridItem w={"70%"} bg={"orange"} height={"80%"}></GridItem>
            </Grid> 
        </Container>
    );
}

export default Productpage;
