import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "@/api";

// const getUrl = (api, filterBy) => {
//   if (filterBy) {
//     api = `${api}/product/getall?category=${filterBy}`;
//   }
//   return api;
// };

const UpdateProduct = () => {
  const router = useRouter();
  const [data, setData] = React.useState([]);
  const [filterBy, setFilterBy] = React.useState("");

  React.useEffect(() => {
    getProductsData();
  }, [filterBy]);

  const getProductsData = async (params) => {
  
    let res = await axios("/product/getall");
    const d = await res.data;
     setData(d.products);
  
   
  };

  const handleChange = (e) => {
    setFilterBy(e.target.value);
  };

  return (
    <div>
      <Box>
        <Center background={"#c9c3cd"}>
          <Heading>Products</Heading>
        </Center>
        <Flex
          margin={"20px"}
          gap={"20px"}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Box width="fit-content">
            <Button
              fontWeight={"bold"}
              background={"black"}
              color={"white"}
              _hover={{ background: "#444444", color: "white" }}
            >
              <Link href={"/admin"}>Dashboard</Link>
            </Button>
          </Box>
          <Box width="200px">
            <Select
              placeholder="Select Category"
              name="category"
              fontWeight={"bold"}
              _hover={{ cursor: "pointer" }}
              onChange={handleChange}
            >
              <option value="women-ethnic">Women Ethnic</option>
              <option value="women-western">Women Western</option>
              <option value="Kids">Kids</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="beauty">Beauty & Health</option>
            </Select>
          </Box>
        </Flex>
        <Box
          style={{ width: "fit-content" }}
          margin={"20px auto"}
          padding={{
            base: "0px 10px",
            sm: "0px 10px",
            md: "0px 10px",
            lg: "",
            xl: "",
            "2xl": "",
          }}
        >
          <SimpleGrid
            columns={{
              base: "1",
              sm: "2",
              md: "3",
              lg: "3",
              xl: "4",
              "2xl": "4",
            }}
            gap="20px"
          >
            {data?.map((product) => {
              return <ProductCard key={product._id} id={product._id} {...product} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default UpdateProduct;
