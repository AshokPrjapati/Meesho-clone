const { default: axios } = require("axios");

export const fetchAddress = () => {
    return axios.get(`http://localhost:8080/address`).then((res => res.data)).catch(er => alert("something went wrong"));
};

export const postAddress = (data) => {
    return axios.post(`http://localhost:8080/address`, data).then((res => res.data)).catch(er => alert("something went wrong"));
};

export const patchAddress = (data, id) => {
    return axios.patch(`http://localhost:8080/address/${id}`, data).then((res => res.data)).catch(er => alert("something went wrong"));
}