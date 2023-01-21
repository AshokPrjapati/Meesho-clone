const { default: axios } = require("axios");

export const fetchAddress = async () => {
    let res = await axios.get(`http://localhost:8080/address`);
    let data = await res.data;
    return data;
};

export const postAddress = async (data) => {
    let res = await axios.post(`http://localhost:8080/address`, data);
    return await res.data;
};

export const patchAddress = async (data, id) => {
    let res = axios.patch(`http://localhost:8080/address/${id}`, data);
    return await res.data;
}