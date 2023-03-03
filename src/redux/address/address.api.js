import { api } from "@/api";
import axios from "axios"
export const patchAddress = async (obj, id) => {
    let res = await axios.patch(`${api}/address/${id}`, obj);
    let d = await res.data;
    return d;
}

export const postAddress = async (obj) => {
    let res = await axios.post(`${api}/address`, { ...obj });
    let d = await res.data;
    console.log(d);
    return d;
}

export const fetchAddress = async () => {
    let res = await axios.get(`${api}/address`);
    let data = await res.data;
    return data;
}