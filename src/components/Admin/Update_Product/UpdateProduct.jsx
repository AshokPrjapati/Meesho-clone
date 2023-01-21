import { Box, Button, Center, Flex, Heading, Select, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router';
import React from 'react'
import ProductCard from './ProductCard';
import Link from 'next/link';

const UpdateProduct = () => {
    const router = useRouter();
    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        getProductsData();
    },[])

    const getProductsData = async (params) => {
        let res = await axios({
          baseURL: `https://lazy-erin-caridea-veil.cyclic.app/products`,
          method: `get`
        });
        setData(res.data)
      };

  return (
    <div>
        <Box>
            <Center background={"#c9c3cd"}>
                <Heading>
                    Products
                </Heading>
            </Center>
            <Flex margin={"20px"} gap={"20px"} flexDirection={{base:"column", sm:"row"}}>
                <Box width="fit-content">
                    <Button fontWeight={"bold"} background={"black"} color={"white"} _hover={{background:"#444444", color:"white"}}><Link href={"/admin"}>Dashboard</Link></Button>
                </Box>
                <Box width="200px">
                <Select placeholder='Select Category' name="category" fontWeight={"bold"} _hover={{ cursor:"pointer" }}>
                  <option value="women-ethnic">Women Ethnic</option>
                  <option value="women-western">Women Western</option>
                  <option value="men">Men</option>
                  <option value="kids">Kids</option>
                  <option value="home-kitchen">Home & Kitchen</option>
                  <option value="beauty-health">Beauty & Health</option>
                </Select>
                </Box>
            </Flex>
            <Box style={{width:"fit-content"}} margin={"20px auto"} padding={{base:"0px 10px", sm:"0px 10px", md:"0px 10px", lg:"", xl:"", "2xl":""}}>
                <SimpleGrid columns={{base:"1", sm:"2", md:"3", lg:"3", xl:"4", "2xl":"4"}} gap="20px">
                    {data?.map((product)=>{
                        return (
                            <ProductCard key={product.id} {...product}/>
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Box>
    </div>
  )
}

// export async function getStaticProps(){
//     let r = await fetch("https://lazy-erin-caridea-veil.cyclic.app/products")
//     let d = await r.json();
//     console.log(r)
//     return{
//       props:{
//         data: d
//       }
//     }
//   }

export default UpdateProduct