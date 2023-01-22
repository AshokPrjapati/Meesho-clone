

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


import React,{useState,useEffect} from 'react'
import axios from "axios"


const getApi=async()=>{

   let res= await axios.get("http://localhost:8080/order") 
   let data= await res.data;
  return data;
}


const Order = () => {
  
    const [data,setData]=useState([])
 
    useEffect(()=>{
      getApi()
      .then((res)=>setData(res))
      .catch((err)=>console.log(err))
    },[])
   console.log(data)   
  
  
    return (
      <div>
        <h1 style={{textAlign:"center",marginTop:"10px"}}>Recent Orders</h1>
        <TableContainer>
    <Table variant='simple'>
      <TableCaption>Total Orders</TableCaption>
      <Thead>
        <Tr>
            <Th>Id</Th>
            <Th>Order ID</Th>
          <Th>Title</Th>
          <Th>Products</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
      
        {
          data?.map((items)=>{
          return  <Tr>
            <Td fontFamily="'Philosopher', sans-serif;">{items.id}</Td>
            <Td >{items.orderId}</Td>
            {
               items.products.map((e)=>(
                <Tr>
                   <Th>Products</Th>
                   <Td>{e.title}</Td>
                   <Th>Price</Th>
                   <Td>${e.price}</Td>
                </Tr>
                
               )) 
            }
            </Tr>
          })
        }
    
      </Tbody>
    
    </Table>
  </TableContainer>
      </div>
    )
  }

  export default Order;