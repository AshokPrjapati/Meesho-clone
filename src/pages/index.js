import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import React, { useState } from 'react'
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"
import {
  Text,
  Flex,
  Box,
  Grid,
  SimpleGrid,
  Select,
Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Heading,
  
} from "@chakra-ui/react";
import Productcard from '@/components/Products/productcard'
import Footer from '@/components/Footer/Footer'
export default function Home({data}) {
  const [des,setdes]=useState(true)
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
<p>Top Categories to choose from</p>
<img src='./header2.png'></img>
<img src='./header3.png'></img>
<img src='./header4.png'></img>
<img src='./lastheader.png'></img>


        </header>

<Flex direction={"column"}>
<Box >
     <Text fontSize={"32px"} ml="30px">Products for you</Text>
      <Flex
        w="100%"
        gap={"1.5%"}
       
        p={"2rem"}>
          <Box w={"23%"} display={{base:"none",md:"none",sm:"none",lg:"block",xl:"block",'2xl':"block"}}>
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
        <Box w={"76%"} bg={"white"} m="0px auto" height={"80%"}>
          <SimpleGrid columns={{base:2,md:2,sm:2,lg:3,xl:4,'2xl':4}} gridTemplateRows={"max-content"}  gap={"1.5rem"}>
            {data.map((el) => (
              <Box height={"100%"} key={el.id}>
                <Productcard key = {el.id} id={el.id} {...el} />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
    <Box  > <Footer/>
<div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
<Button w="90%" ml="70px" mt={"20px"} mb="5px" onClick={()=>setdes(!des)}>More About Meesho {des?<ChevronUpIcon/>:<ChevronDownIcon />} </Button>
{des?<div className={styles.description}>
<div>
  <Heading>Meesho: Affordable Online Shopping at Your Fingertips</Heading>
<Text >
There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet. 
</Text>
</div>
<div>
  <Heading>A Huge Selection of Products Across All Categories</Heading>
<Text >
We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need. 
</Text>
</div>
<div>
  <Heading>Latest Women's Fashion Is Right Here
Women’s Ethnic Wear Collection</Heading>
<Text >
When it comes to women's ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today! 
</Text>
</div>

<div>
  <Heading>Western Wear for Women</Heading>
<Text >
Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!
</Text>
</div>
<div>
  <Heading>Accessories, Jewellery, and Footwear</Heading>
<Text >
You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you'll be sure to find the perfect accessories for any outfit!
</Text>
</div>
<div>
  <Heading>Men's Ethnic Wear</Heading>
<Text >
Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men’s ethnic wear collection! Whether you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs.
</Text>
</div>
<div>
  <Heading>Men’s Western Wear</Heading>
<Text >
Through our large selection of menswear products we offer, you’re sure to find something you love. We have a vast collection of t-shirts, jeans, polos, coats, and shirts. We have sizes in stock that fit any man’s body type, and the best news of all is that they’re all affordable. We make it easy to find exactly what you’re looking for, too. Our search tool lets you filter our selection down by size, color, material, and more. 
</Text>
</div>
<div>
  <Heading>Ethnic Wear for Men</Heading>
<Text >
If you're on the hunt for a new sherwani or any other type of Indian attire for an upcoming wedding, our latest men's ethnic wear collection has got you covered. We have a range of budget-friendly styles to choose from, so you're sure to find something that fits your needs. Whether you're looking for a Sherwani set, Kurta pajamas, or an ethnic jacket, we've got it all!
</Text>
</div>
<div>
  <Heading>Men’s Accessories and Footwear</Heading>
<Text >
When it comes to fashion, no one knows how to help you gain the upper hand in style better than us. Shop our online collection of accessories for men and pick out something for yourself or for your other half! Our accessories collection includes items like men's wallets, cufflinks, bags for men, and more. So don't waste another minute and get yourself some accessories today! Do not forget to check out our latest footwear for men. We have everything from colorful sneakers to formal footwear to flip-flops for men.
</Text>
</div>
<div>
  <Heading>Affordable and Top Quality Beauty Products</Heading>
<Text >
With so many different cosmetics brands, products, and items to choose from, it can be overwhelming when trying to find the right makeup for you. Sometimes it's nice to try out new products, but if you buy bad quality makeup that breaks you out, it's not very cost-effective. We are only concerned with the best products. We only stock up on the best makeup and skincare that won't damage your skin or make you break out. We have everything from foundations, makeup removers, concealers to primer, mascara, eye shadow, and lipsticks.
</Text>
</div>
<div>
  <Heading>Cute and Trendy Kidswear Collections</Heading>
<Text >
Kids grow so fast, it feels like you're constantly buying new clothes for them! Whether you're looking for the latest trends or just want something practical and affordable, our kidswear collection has got you covered. You'll find everything from rompers and dresses for girls to sets and jeans for boys. Plus, we have ethnic wear and accessories for kids of all ages. And don't forget to check out our baby care collection for all the basic products for baby care.
</Text>
</div>
<div>
  <Heading>Kitchen Products</Heading>
<Text >
If you're looking to spice up your kitchen, then you've come to the right place! We carry a wide variety of home and kitchen essentials like cooking utensils and serveware, kitchen storage, appliances like blenders, choppers, cooktops, and more! We are dedicated to providing the highest quality products for a reasonable price. We're confident that we have everything you're looking for in your kitchen or home! 
</Text>
</div>
<div>
  <Heading>Home Utility and Essentials</Heading>
<Text >
It's always a good idea to switch up your home's style every now and then - it keeps things fresh and also allows you to try out new trends. But of course, you never want to spend more money than you have to. That's where Meesho comes in! We've got amazing prices on all kinds of home furnishing items like bedsheets, curtains, cushions, and more. Plus, we have a constantly rotating selection of the best home decor items so you can always stay on top of the latest trends. So be sure to check out our home decor section today! 
</Text>
</div>
<div>
  <Heading>Electronics and Accessories</Heading>
<Text >
 Meesho, we give you access to a huge selection of gadgets and essentials for your electronic devices. Here you'll find everything from chargers and headphones to data cables and even external battery packs. Every month, we offer different sales and discounts on products, allowing you to save on your favorite essentials. Here you can find the perfect gift for everyone on your list without breaking your budget!
</Text>
</div>
<div>
  <Heading>Health, Fitness & Sports</Heading>
<Text >
We know how important it is to take care of your health and keep yourself fit. We have everything you need to start your journey towards fitness. At our store, you will find a wide variety of fitness equipment at very affordable prices. We have everything you need to get started with your home workouts, including dumbbell sets, exercise bands, exercise mats, skipping ropes, sports kits and more!
</Text>
</div>
<div>
  <Heading>Office Supplies and Stationery </Heading>
<Text >
We have a wide range of stationery items which will help you stay tidy and organised. You can buy notebooks, diaries and notepads and craft supplies which are great for school and college, or you can buy office supplies which are great for adults. We have a variety of pens, pencils, and other stationery supplies to ensure that you have what you need to write down your thoughts, make lists and so much more.
</Text>
</div>
<div>
  <Heading>Get the Meesho App for Hassle Free Online Shopping </Heading>
<Text >
If you want a seamless shopping experience, you should also consider downloading Meesho’s App. While you may think that it's unnecessary to have an app for shopping, there are plenty of features that will make your life easier. If you find yourself preferring to shop from home, this is the app for you. It makes shopping online easier than ever. You can browse through a plethora of products and even get great deals with more discounts than you can count. You can even share products you like with your friends on social media in just seconds. 
</Text>
</div>
<a href='/'>Download Apni Dukan App Now</a>
<div>
  <Heading>Become a Reseller: Start Making Money In Three Simple Steps </Heading>
<Text >
Now you know all about different categories and products Meesho has to offer. It's time to explore and understand Meesho’s reselling option. Apart from using Meesho as an online shopping platform, you also have the option to start your online business with us. Here’s how you can begin your entrepreneurial journey.

Browse: You can register for a new account or log in to an existing one on the Meesho app or website. Once you're logged in, you can browse through our catalog and select products that you want to purchase at wholesale rates!

Share: With a single click, you can share catalogs and product images over Whatsapp, Facebook, or Instagram to your contacts using the share option.

Earn: After sharing the products and catalogs with your customers, you will start getting orders from them. You can add a profit margin to Meesho’s prices and quote that to your customers.This will be your profit. You can quote product prices with an added margin, which will include a profit for you. Once you place the orders on your customer’s behalf, Meesho will take care of the delivery process for you.  
</Text>
</div>
<div>
  <Heading>Don't Miss Out! Start Shopping Online on Meesho Now</Heading>
<Text >
Meesho offers multiple payment options including debit and credit cards, UPI, and COD to help you with a smooth checkout process. If you are unhappy with any of the products you order you can immediately return them and get a full refund with no questions asked. In case you have any queries or concerns, simply send us an email at query@meesho.com. Or you can contact us on social media through Facebook, Instagram, or Twitter. We're here to help you!.  
</Text>
</div>

<div className={styles.linkSection}>

  <h3>Online Shopping</h3>
  <h4>Home & Living</h4>
  <div className={styles.links}>
  <a href='#'>Cutains and Sheers</a> | <a href='#'> Round Cushions</a> |  <a href='#'>Sofa Covers</a> |  <a href='#'>Cotton Bedsheets</a> |  <a href='#'>Bedding Sets</a> |  <a href='#'>Pillow Covers</a> |<a href='#'>Decorative Items</a> |  <a href='#'>Duvet Covers</a> |  <a href='#'>Blankets</a> |  <a href='#'>Furniture</a> |  <a href='#'>Carpets</a> 
  </div>
</div>
<div className={styles.linkSection}>



  <h4>Men Ethnicwear</h4>
  <div className={styles.links}>
  <a href='#'>Men Dhoti Kurtas</a> | <a href='#'> Men Indo Western Dresses</a> |  <a href='#'>Men Velvet Sherwanis </a> |  <a href='#'>Cotton Bedsheets</a> |  <a href='#'> Men Dhotis</a>
  </div>
</div>

<div className={styles.linkSection}>

 {/* |  | |  |  |  |  |  | | |  |  |  | | |  | |  |  |  |  | |  |  | Push Up Bra | Stockings | Black Camisoles | Cotton Bathrobes | Satin Night Suit | Body shapers | Women Pyjamas | Swimwear | Women Jackets | Women Thermal Set */}

  <h4>Women Western Wear</h4>
  <div className={styles.links}>
  <a href='#'>Women Frocks</a> | <a href='#'> Long Tops Women</a> |  <a href='#'> Tshirt Dresses</a> |  <a href='#'>Designer Gown</a> |  <a href='#'>Pencil Skirts</a> |  <a href='#'>Women Trousers</a> |<a href='#'>Flared Jeans</a> |  <a href='#'>Women Sweatshirts</a> |  <a href='#'>Shrugs </a> |  <a href='#'>Jacket Dresses</a> |  <a href='#'>Fancy Ladies Sweater</a>   |  <a href='#'>Chikankari Palazzos</a> | <a href='#'> Ankle Length Leggings </a> |  <a href='#'> Tights</a> |  <a href='#'>Printed Leggings</a> |  <a href='#'>Short Night Dress </a> |  <a href='#'>Maternity Wear</a> |<a href='#'>Denim Women Shorts</a> |  <a href='#'>Black Jeggings</a> |  <a href='#'>Women Night Suits </a> |  <a href='#'>Lace Lingerie Sets</a> |  <a href='#'>Lingerie Sets</a> 
  </div>
</div>

<div className={styles.linkSection}>


 
  <h4>Women Footwear</h4>
  <div className={styles.links}>
  <a href='#'>Women Slippers</a> | <a href='#'> Bellies</a> |  <a href='#'> Juttis</a> |  <a href='#'>Mojaris</a> |  <a href='#'>Sandals</a> |  
  </div>
</div>


<div className={styles.linkSection}>

  
  <h4>Baby</h4>
  <div className={styles.links}>
  <a href='#'>Baby Pillows</a> | <a href='#'> Baby Towels</a> |  <a href='#'>Baby Hanging Cradle</a> |  <a href='#'>Baby Sleeping Bag</a> |  <a href='#'>Baby Blanket</a>  
  </div>
</div>


<div className={styles.linkSection}>
  
  <h4>Home & Kitchen</h4>
  <div className={styles.links}>
  <a href='#'>Toaster</a> | <a href='#'> Mixer Grinder</a> |  <a href='#'>Cookers</a> |  <a href='#'>Juicer</a> |  <a href='#'>Food Processors</a> |  <a href='#'>Roti Maker</a> |  <a href='#'>Sandwich Maker</a> |  <a href='#'>Kettles</a> |  <a href='#'>Hand Blender </a> |  <a href='#'>Table Cover</a> |  <a href='#'>Napkins Holder</a>  |  <a href='#'>Kitchen Mat</a>  |  <a href='#'> Kitchen Towel</a>  |  <a href='#'>Aprons</a>  |  <a href='#'> Kitchen Gloves</a>  |  <a href='#'>Racks & Holders</a>  |  <a href='#'>Spice Racks</a>  |  <a href='#'>Thermos & Flasks </a>  |  <a href='#'>Lunch Boxes </a>  |  <a href='#'>Water Bottles</a>   |  <a href='#'>Jars & Container</a>  |  <a href='#'>Salt & Pepper Shakers</a>  |  <a href='#'>Knives</a>  |  <a href='#'>Food Strainers</a>  |  <a href='#'>Choppers</a>  |  <a href='#'> Mashers</a>  |  <a href='#'>Graters </a>  |  <a href='#'>Cutlery</a>
  </div>
</div>


<div className={styles.linkSection}>

 
  <h4>Personal Care & Wellness</h4>
  <div className={styles.links}>
  <a href='#'>Tummy trimmer</a> | <a href='#'>Makeup Kits</a> |  <a href='#'> Hair Care </a> |  <a href='#'>Hair Color</a> |  <a href='#'>Hair Steamers</a> |  <a href='#'>Oral Care </a> |  <a href='#'>Beard Oil</a> |  <a href='#'>Deodorants</a> |  <a href='#'>Eye Lenses</a> |  <a href='#'>Soap</a> |  <a href='#'>Oximeter </a> |  <a href='#'> Bb Cream </a> |  <a href='#'>Body Scrub</a> |  <a href='#'> Olive Oils </a> |  <a href='#'>Talcum Powder </a> |  <a href='#'> Face Steamers  </a> |  <a href='#'>Compact </a> |  <a href='#'>Nail Cutter</a> |  <a href='#'>Lip Balm </a> 
  </div>
</div>
</div>:null}
</div>
</Box>

</Flex>


      
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