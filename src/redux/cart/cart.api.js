import axios from "axios"
import { api } from "@/api"


export const addCartProduct = async (obj) => {
    let res = await axios.post(`${api}/cart`, obj);
    // let res = await axios({
    //     method: "post",
    //     url: `${api}/cart`,
    //     data: { ...obj }
    // }) 
    let d = await res.data;
    return d;
}

export const updateOrder = async (products) => {
    let res = await axios.post(`${api}/order`, { orderId: Date.now(), products });
    let d = await res.data;
    return d;
}

export const deleteCartProduct = async (id) => {
    let res = await axios.delete(`${api}/cart/${id}`);
    let data = await res.data;
    return data;
}

export const fetchCartProducts = async () => {
    let res = await axios.get(`${api}/cart`);
    let data = await res.data;
    return data;
}