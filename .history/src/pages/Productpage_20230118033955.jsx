import React from 'react';
import Productcard from './productcard';
import { Container,Flex,Box, Grid, SimpleGrid } from '@chakra-ui/react';
const Productpage = ({data}) => {
    console.log(data)
    return (
        <Container>
            <Box h={"6rem"}>
                <h1>sectionname</h1>
            </Box>
           <Flex gap={"0.4%"} flexWrap={"wrap"} height={"120rem"}>
            <Box w={"23.6%"} bg={"green"} height={"60%"}></Box>
            <Box w={"76%"} bg={"white"} height={"80%"}>
                <SimpleGrid columns={"4"}>
               {
                data.map((el)=>(
                    <Box bo>
                    <Productcard image={el.image} price={el.price} title={el.title}/>
                    </Box>

                ))
               }
                </SimpleGrid>
            </Box>
            </Flex> 
        </Container>
    );
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default Productpage;
