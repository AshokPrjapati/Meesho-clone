import React from 'react';
import { Container,Flex,Box } from '@chakra-ui/react';
const Productpage = ({sectionname.data}) => {
    return (
        <Container>
            <Box h={"6rem"}>
                <h1>sectionname</h1>
            </Box>
           <Flex gap={"0.4%"} flexWrap={"wrap"} height={"120rem"}>
            <Box w={"23.6%"} bg={"green"} height={"60%"}></Box>
            <Box w={"76%"} bg={"orange"} height={"80%"}></Box>
            </Flex> 
        </Container>
    );
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`'https://fakestoreapi.com/products`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default Productpage;
