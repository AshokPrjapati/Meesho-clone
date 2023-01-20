import axios from "axios"
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