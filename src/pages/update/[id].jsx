import React, { useEffect, useState } from "react";
import styles from "./update.module.css";
import axios from "axios";
import {
  Heading,
  Center,
  FormControl,
  Input,
  Select,
  Button,
  Textarea,
  Flex,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import UploadImage from "../../components/Admin/UploadImage";
import { useRouter } from "next/router";
import { api } from "@/api";
import { useSelector } from "react-redux";




const Update = () => {
  const token = useSelector(store => store.login.token)
  const router = useRouter();
  let id = router.query.id

  // const [product,setProduct]=useState({})
  const [productdata, setData] = React.useState({});



  const getData = async (id) => {
    try {
      let r = await axios(`/product/singleproduct/${id}`);
      let d = await r.data;
      let product = d.product
      setData(product)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id) {

      getData(id)

    }
  }, [id])
  console.log(productdata)


  const onInputChange = (e) => {
    let a = e.target.value;
    let b = e.target.name;
    if (e.target.type == "number") {
      a = +a;
    }


    setData({ ...productdata, [b]: a });
  };

  const handleUpdate = async (id) => {
    if (
      productdata.title &&
      productdata.image &&
      productdata.category &&
      productdata.reviews.rate &&
      productdata.price
    ) {
      try {
        axios.patch(`/product/update/${id}`, productdata, { headers: { 'Authorization': token } })
      } catch (err) {
        console.log(err);
        alert("Facing some issues please try again");
        return;
      }

      alert("Product Updated Successfully");
    } else {
      alert("Fill the data properly");
    }
  };

  const deleteProduct = async (id) => {
    if (
      productdata.title &&
      productdata.image &&
      productdata.category &&
      // productdata.reviews.rate &&
      productdata.price
    ) {
      try {
        axios.delete(`/product/remove/${id}`, { headers: { 'Authorization': token } })
      } catch (err) {
        console.log(err);
        alert("Facing some issues please try again");
        return;
      }

      alert("Product deleted Successfully");
    }
  };



  return (
    <>

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
              <Button>Update Products</Button>
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
                    <label
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      Title:
                    </label>

                    <Input
                      value={productdata?.title}
                      placeholder="Title"
                      name="title"
                      onChange={onInputChange}
                    />

                    <label
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      Price:
                    </label>

                    <Input
                      value={productdata?.price}
                      type="number"
                      placeholder="Price"
                      name="price"
                      onChange={onInputChange}
                    />

                    <label
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      Discount:
                    </label>

                    <Input
                      value={productdata?.discount}
                      type="number"
                      placeholder="Discount"
                      name="discount"
                      onChange={onInputChange}
                    />

                    {/* <label
                    style={{
                      width: "fit-content",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    Reviews:
                  </label>

                  <Input
                    value={productdata.reviews.rate}
                    type="number"
                    placeholder="Reviews"
                    name="reviews"
                    onChange={onInputChange}
                    disabled
                  /> */}

                    <label
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      Description:
                    </label>

                    <Textarea
                      value={productdata?.description}
                      placeholder="Product Description"
                      name="description"
                      onChange={onInputChange}
                    />

                    <label
                      style={{
                        width: "fit-content",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      Category:
                    </label>

                    <Select
                      value={productdata?.category}
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
                        onClick={() => handleUpdate(productdata._id)}
                      >
                        Update
                      </Button>
                      <Button
                        mt={4}
                        colorScheme="red"
                        type="submit"
                        onClick={() => deleteProduct(productdata._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </FormControl>
                </div>
              </div>
            </Box>
            <Box width={"fit-content"} margin={"auto"}>
              <UploadImage product={productdata} img={productdata?.image} />
            </Box>
          </Flex>
        </div>
      </div>
    </>
  );
};


export default Update;
