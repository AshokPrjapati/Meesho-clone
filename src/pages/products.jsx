import React from "react";
import Productcard from "../components/Products/productcard";
import { Flex, Box, SimpleGrid, Select } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";
import axios, { Axios } from "axios";
import styles from '@/styles/Home.module.css'
import SmallNavbar from "@/components/Navbar/SmallNavbar";
import Footer from "@/components/Footer/Footer";
const Productpage = ({ data }) => {
  let category = ["dresses", "kurti", "jeans"];
  let Gender = ["Mens", "Womens", "Girl", "Boys"];
  let colors = ["red", "green", "yellow", "pink", "black", "white", "blue"];
  let Price = [
    "Below ₹500",
    "Below ₹1000",
    "Below ₹1500",
    "Below ₹200",
    "Above ₹2000",
  ];
  let Rating = ["2.0 and Above", "3.0 and Above", "4.0 and Above", "M-Trusted"];
  let fabric = [
    "Acrylic",
    "Chiffon",
    "Cotton",
    "Cotton Silk",
    "Crepe",
    "Denim",

    "Khadi Cotton"]
  let Size = ['0-2 Years', '2-5 Years', 'S', 'M', 'L', 'XL', '2XL', '4XL']
  let Discount = ['10% off', '20% off', 'All Discount', 'Deals']

  return (
    <Box>
      <div className={styles.big}><Navbar /></div>
      <div className={styles.small}><SmallNavbar /></div>

      <Flex
        w="100%"
        gap={"1.5%"}

        p={"2rem"}>

        <Box mb={"10px"} w={["50%", "30%", "40%", "23%"]} display={["none", "none", "block"]} >

          <Select mb={"1rem"}>
            <option>Sort By: Relevence</option>
            <option>New Arrival</option>
            <option>Price(Low to High)</option>
            <option>Price(High to Low)</option>
            <option>Rating</option>
            <option>Discount</option>
          </Select>

          <Flex overflow="hidden" direction={["column", "column", "column", "column"]} borderRadius={"5px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}>
            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h3 style={{ fontWeight: "normal" }}>FILTERS</h3>
              <p style={{ color: "grey" }}>1000+ products</p>
              <br />
              <hr />
            </Box>

            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h3 style={{ fontWeight: "normal" }}>Category</h3>
              <Select m={"4px"} >
                {category.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Select>
            </Box>
            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h2 style={{ fontWeight: "normal" }}>Fabric</h2>

              <Select m={"4px"}>
                {fabric.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Select>
            </Box>
            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h2 style={{ fontWeight: "normal" }}>size</h2>

              <Select m={"4px"}>
                {Size.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Select>
            </Box>
            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h2 style={{ fontWeight: "normal" }}>Rating</h2>
              <Select m={"4px"}>
                {Rating.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Select>
            </Box>

            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h2 style={{ fontWeight: "normal" }}>Gender</h2>
              <Select m={"4px"}>
                {Gender.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Select>
            </Box>



            <Box mt={"1rem"} p={"5px"} w={"90%"} >
              <h2 style={{ fontWeight: "normal" }}>Discount</h2>
              <Select m={"4px"}>
                {Discount.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Select>
            </Box>
          </Flex>
        </Box>


        <Box w={["90%", "90%", "76%", "76%"]} bg={"white"} m="0px auto" height={{ sm: "90%", lg: "80%" }} >
          <SimpleGrid columns={{ base: 2, md: 2, sm: 2, lg: 3, xl: 4, '2xl': 4 }} gridTemplateRows={"max-content"} gap={"1.5rem"}>
            {data.length && data.map((el) => (
              <Box className={styles.cardsprod} height={"100%"} key={el._id}>
                <Productcard id={el._id} {...el} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export async function getServerSideProps() {

  // Fetch data from external API
  const res = await axios.get(`/product/getall`);
  const d = await res.data;
  const data = d.products

  // Pass data to the page via props
  return { props: { data } };
}
export default Productpage;
