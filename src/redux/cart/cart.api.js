import axios from "axios"

export const addCartProduct = async (obj) => {
    let res = await axios.post(`https://lazy-erin-caridea-veil.cyclic.app/cart`, obj);
    let d = await res.data;
    console.log(d);
    return d;
}

export const updateOrder = async (products) => {
    let res = await axios.post(`https://lazy-erin-caridea-veil.cyclic.app/order`, { orderId: Date.now(), products });
    let d = await res.data;
    return d;
}

export const deleteCartProduct = async (id) => {
    let res = await axios.delete(`https://lazy-erin-caridea-veil.cyclic.app/cart/${id}`);
    let data = await res.data;
    return data;
}

export const fetchCartProducts = async () => {
    let res = await axios.get(`https://lazy-erin-caridea-veil.cyclic.app/cart`);
    let data = await res.data;
    return data;
}