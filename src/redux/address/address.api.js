import axios from "axios"
export const patchAddress = async (obj, id) => {
    let res = await axios.patch(`https://lazy-erin-caridea-veil.cyclic.app/address/${id}`, obj);
    let d = await res.data;
    return d;
}

export const postAddress = async (obj) => {
    let res = await axios.post(`https://lazy-erin-caridea-veil.cyclic.app/address`, { obj });
    let d = await res.data;
    console.log(d);
    return d;
}

export const fetchAddress = async () => {
    let res = await axios.get(`https://lazy-erin-caridea-veil.cyclic.app/address`);
    let data = await res.data;
    return data;
}