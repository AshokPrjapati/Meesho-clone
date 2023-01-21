import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import {
  Text,
  Flex,
  Box,
  Grid,
  SimpleGrid,
  Select,
  VStack,
  
} from "@chakra-ui/react";
import Productcard from '@/components/Products/productcard'
export default function Home({data}) {
  let category = ['dresses','kurti','jeans']
  let Gender = ['Mens','Womens','Girl','Boys']
  let colors = ['red','green','yellow','pink','black','white','blue']
  let Price = ['Below ₹500','Below ₹1000','Below ₹1500','Below ₹200','Above ₹2000']
  let Rating = ['2.0 and Above','3.0 and Above','4.0 and Above','M-Trusted']
  let fabric = [
    "Acrylic",
    "Chiffon",
    "Cotton" ,  "Cotton Silk",
    "Crepe",
    "Denim",
    "Khadi Cotton"]
    let Size = ['0-2 Years','2-5 Years','S','M','L','XL','2XL','4XL']
    let Discount = ['10% off','20% off','All Discount','Deals']
  return (
    <>
      <div>
        <Navbar />
        <header className={styles.header}>
<img src='./header1.png'></img>
<p>-------Top Categories to choose from-----------</p>
<img src='./header2.png'></img>
<img src='./header3.png'></img>
<img src='./header4.png'></img>
<img src='./lastheader.png'></img>


        </header>

<div>
<Box>
     <Text fontSize={"32px"} ml="30px">Products for you</Text>
      <Flex
        w="100%"
        gap={"1.5%"}
        height={"120rem"}
        p={"2rem"}>
          <Box w={"23%"}>
          <Select  mb={"1rem"}>
            <option>Sort By: Relevence</option>
            <option>New Arrival</option>
            <option>Price(Low to High)</option>
            <option>Price(High to Low)</option>
            <option>Rating</option>
            <option>Discount</option>
          </Select>
    
          <Flex  direction={"column"}  borderRadius={"5px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} height={"70rem"}>
          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h3 style={{fontWeight:"normal"}}>FILTERS</h3>
            <p style={{color:"grey"}}>1000+ products</p>
            <br/>
            <hr />
          </Box>

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h3 style={{fontWeight:"normal"}}>Category</h3>
           <Select m={"4px"}>
         { category.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>
          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Fabric</h2>
            
           <Select m={"4px"}>
         { fabric.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Gender</h2>
            
           <Select m={"4px"}>
         { Gender.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Size</h2>
            
           <Select m={"4px"}>
         { Size.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>

        

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Colors</h2>
            
           <Select m={"4px"}>
         {colors.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Price</h2>
            
           <Select m={"4px"}>
         {Price.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Rating</h2>
            
           <Select m={"4px"}>
         {Rating.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>

          <Box mt={"1rem"} p={"5px"} w={"90%"} >
            <h2 style={{fontWeight:"normal"}}>Discount</h2>
            
           <Select m={"4px"}>
         {Discount.map((el)=>(
            <option>{el}</option>
           )
           )
         }
           </Select>
          </Box>
          </Flex>
        </Box>
        <Box w={"76%"} bg={"white"} height={"80%"}>
          <SimpleGrid columns={{base:1,md:2,sm:2,lg:3,xl:4,'2xl':4}} gap={"1.5rem"}>
            {data.map((el) => (
              <Box key={el.id}>
                <Productcard key = {el.id} id={el.id} {...el} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>


</div>

      
      </div>
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://lazy-erin-caridea-veil.cyclic.app/products`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}