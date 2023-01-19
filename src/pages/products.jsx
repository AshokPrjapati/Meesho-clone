import React from "react";
import Productcard from "../components/Products/productcard";
import {
  Container,
  Flex,
  Box,
  Grid,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
const Productpage = ({ data }) => {
  return (
    <Box>
      <Navbar />
      <Flex
        w="100%"
        gap={"1.5%"}
        flexWrap={"wrap"}
        height={"120rem"}
        p={"2rem"}
      >
        <Box w={"22%"} height={"60%"}>
          <Select>
            <option value="A">A</option>
          </Select>
        </Box>
        <Box w={"76%"} bg={"white"} height={"80%"}>
          <SimpleGrid columns={[1, 2, 3, 4]} gap={"1.5rem"}>
            {data.map((el) => (
              <Box key={el.id}>
                <Productcard id={el.id} {...el} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Productpage;
