const { default: axios } = require("axios");

export const fetchProduct = async () => {
    let res = await axios.get(`https://lazy-erin-caridea-veil.cyclic.app/products`);
    let data = await res.data;
    return data;
};

export const handleUpdate = async (data, id) => {
    let res = axios.patch(`https://lazy-erin-caridea-veil.cyclic.app/products/${id}`, data);
    return await res.data;
}