import {
  Heading,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import styles from "./addproduct.module.css";
import UploadImage from "./UploadImage";
import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";

const productObject = {
  category: "",
  image: "",
  title: "",
  reviews: {
    rate: "",
    count: "",
  },
  price: "",
  discount: "",
  description: "",
};

const AddProductPage = () => {
  const token=useSelector(store=>store.login.token)
  const [productdata, setData] = React.useState({
    image: "",
    title: "",
    price: "",
    reviews: {
      rate: "",
      count: "",
    },
    category: "",
    discount: "",
    description: "",
  });

  //  console.log(data)

  const onInputChange = (e) => {
    let a = e.target.value;
    let b = e.target.name;
    if (e.target.type == "number") {
      a = +a;
    }

    if (b == "reviews") {
      let r = {
        rate: a,
        count: 0,
      };
      setData({ ...productdata, [b]: r });
      return;
    }
    setData({ ...productdata, [b]: a });
  };

  const handleAdd = () => {
    if (
      productdata.title &&
      productdata.image &&
      productdata.category &&
      productdata.reviews.rate &&
      productdata.price
    ) {
      try {
        axios.post("/product/add",productdata,{ headers: { 'Authorization': token } })
      } catch (err) {
        alert("Facing some issues please try again");
        console.log(err)
        return;
      }

      alert("Product Added Successfully");
      location.reload();
    } else {
      alert("Fill the data properly");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.blurr}>
        <Center>
          <Heading
            size={{
              base: "md",
              sm: "lg",
              md: "lg",
              lg: "lg",
              xl: "lg",
              "2xl": "xl",
            }}
            style={{ marginTop: "25px", marginBottom: "20px" }}
          >
            ADD NEW PRODUCT
          </Heading>
        </Center>
        <div className={styles.updateButton}>
          <Link href="/updateProduct">
            <Button>Update Product</Button>
          </Link>
        </div>
        <Flex
          width={"fit-content"}
          style={{ margin: "auto auto 50px auto" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
          gap={{ md: "40px", lg: "150px", xl: "200px", "2xl": "200px" }}
          className={styles.table}
        >
          <Box width={"fit-content"}>
            <div>
              <div className={styles.form}>
                <FormControl isRequired>
                  <Input
                    value={productdata.title}
                    placeholder="Title"
                    name="title"
                    onChange={onInputChange}
                  />
                  <Input
                    value={productdata.price}
                    type="number"
                    placeholder="Price"
                    name="price"
                    onChange={onInputChange}
                  />
                  <Input
                    value={productdata.discount}
                    type="number"
                    placeholder="Discount"
                    name="discount"
                    onChange={onInputChange}
                  />
                  <Input
                    value={productdata.reviews.rate}
                    type="number"
                    placeholder="Reviews"
                    name="reviews"
                    onChange={onInputChange}
                  />
                  <Textarea
                    value={productdata.description}
                    placeholder="Product Description"
                    name="description"
                    onChange={onInputChange}
                  />
                  <Center>
                    <FormLabel
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Category:
                    </FormLabel>
                  </Center>
                  <Select
                    value={productdata.category}
                    placeholder="Select Category"
                    className={styles.option}
                    name="category"
                    onChange={onInputChange}
                  >
                    <option value="women-ethnic">Women Ethnic</option>
                    <option value="women-western">Women Western</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                    <option value="home-kitchen">Home & Kitchen</option>
                    <option value="beauty-health">Beauty & Health</option>
                  </Select>
                  <div className={styles.button}>
                    <Button
                      mt={4}
                      colorScheme="green"
                      type="submit"
                      onClick={handleAdd}
                    >
                      ADD
                    </Button>
                  </div>
                </FormControl>
              </div>
            </div>
          </Box>
          <Box width={"fit-content"} margin={"auto"}>
            <UploadImage product={productdata} />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default AddProductPage;
