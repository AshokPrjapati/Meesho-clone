import axios from "axios"

export const addCartProduct = async (obj) => {
    let res = await axios.post(`http://localhost:8080/cart`, obj);
    let d = await res.data;
    return d;
}

export const updateOrder = async (products) => {
    let res = await axios.post(`http://localhost:8080/order`, { orderId: Date.now(), product: [...products] });
    let d = await res.data;
    return d;
}

export const deleteCartProduct = async (id) => {
    let res = await axios.delete(`http://localhost:8080/cart/${id}`);
    let data = await res.data;
    return data;
}

export const fetchCartProducts = async () => {
    let res = await axios.get(`http://localhost:8080/cart`);
    let data = await res.data;
    return data;
}