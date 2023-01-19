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
  Box
} from '@chakra-ui/react'
import React from 'react'
import styles from "./addproduct.module.css"
import UploadImage from './UploadImage'

const productObject = {
  category:"",
  image:"",
  title:"",
  reviews:{
    rate:"",
    count:""
  },
  price:"",
  discount:"",
  description:""
}

const AddProductPage = () => {
  const [data,setData] = React.useState({
    category:"",
    image:"",
    title:"",
    reviews:{
      rate:"",
      count:""
    },
    price:"",
    discount:"",
    description:""
 })

//  console.log(data)

  const onInputChange = (e) =>{
    let a = e.target.value
    let b = e.target.name
    if(e.target.type == "number"){
      a= +a;
    }

    if(b == "reviews"){
      let r = {
        rate:a, 
        count:0
      }
      setData({...data,[b]:r})
      return; 
    }
    setData({...data,[b]:a})
  }

  const handleAdd = () => {
    if(data.title && data.image && data.category && data.reviews.rate /*&& data.reviews.count*/ && data.price && data.discount){
      console.log(data)
      alert("Product Added Successfully")
      location.reload();
    }else{
      console.log(data)
      alert("Fill the data properly")
    } 
  }
console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.blurr}>
        <Center>
          <Heading 
            size={{base:"md", sm:"lg", md:"lg", lg:"lg", xl:"lg", "2xl":"xl"}}
            style={{marginTop:"25px",
            marginBottom:"20px"
            }}
            >ADD NEW PRODUCT
          </Heading>
        </Center>
        <div className={styles.updateButton}>
              <Button >Update Product</Button>
        </div>
        <Flex 
        width={"fit-content"} 
        style={{  margin:"auto auto 50px auto"}}
        flexDirection={{base:"column-reverse", md:"row"}}
        gap={{md:"40px", lg:"150px", xl:"200px", "2xl":"200px"}}
        className={styles.table}
        >
          <Box width={"fit-content"}>
            <div>
            <div className={styles.form}>
              <FormControl isRequired>
                <Input value={data.title} placeholder='Title' name="title" onChange={onInputChange}/>
                <Input value={data.price} type="number" placeholder='Price' name="price" onChange={onInputChange}/>
                <Input value={data.discount} type="number" placeholder='Discount' name="discount" onChange={onInputChange} />
                <Input value={data.reviews.rate} type="number" placeholder='Reviews' name="reviews" onChange={onInputChange} />
                <Textarea value={data.description} placeholder='Product Description' name="description" onChange={onInputChange}/>
                <Center>
                  <FormLabel style={{
                    width:"fit-content",
                    fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    fontSize: "20px",
                    fontWeight:"bold"
                  }}>Category:</FormLabel>
                </Center>
                <Select value={data.category} placeholder='Select Category' className={styles.option} name="category" onChange={onInputChange}>
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
                    colorScheme='green'
                    type='submit'
                    onClick={handleAdd}
                  >
                    ADD
                  </Button>
                </div>
              </FormControl>
            </div>
            </div>
          </Box>
            <Box 
            width={"fit-content"}
            margin={"auto"}
            >
                  <UploadImage product={data}/>
            </Box>
        </Flex>
      </div>
    </div>
  )
}

export default AddProductPage