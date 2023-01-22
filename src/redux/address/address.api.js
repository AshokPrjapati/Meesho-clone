import axios from "axios"
export const patchAddress = async (obj, id) => {
    let res = await axios.patch(`http://localhost:8080/address/${id}`, obj);
    let d = await res.data;
    return d;
}

export const postAddress = async (obj) => {
    let res = await axios.post(`http://localhost:8080/address`, obj);
    let d = await res.data;
    console.log(d);
    return d;
}

export const fetchAddress = async () => {
    let res = await axios.get(`http://localhost:8080/address`);
    let data = await res.data;
    return data;
}