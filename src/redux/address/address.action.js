import axios from "axios";
import { ADDRESS_ERROR, ADDRESS_LOADING, EDIT_ADDRESS, GET_ADDRESS, POST_ADDRESS } from "./address.types";



export const getAddress = (token, Toast) => async (dispatch) => {
    dispatch({ type: ADDRESS_LOADING });
    try {
        let res = await axios.get(`cart/getaddress`, { headers: { "Authorization": token } });
        let payload = await res.data.addresses;
        dispatch({ type: GET_ADDRESS, payload });
    } catch (error) {
        dispatch({ type: ADDRESS_ERROR });
        alert(error.response?.data?.message || "Something went wrong while fetching address", "error")
    }
};

export const sendAddress = (data, token, Toast) => async (dispatch) => {
    dispatch({ type: ADDRESS_LOADING });

    try {
        let res = await axios.post(`/cart/addaddress`, data, { headers: { "Authorization": token } });
        let payload = await res.data.address;
        dispatch({ type: POST_ADDRESS, payload });
        Toast(res.data.message, "success");
    } catch (error) {
        dispatch({ type: ADDRESS_ERROR });
        Toast(error.response?.data?.message || "something when wrong while adding address", "error");
    }
}

export const editAddress = (id, data) => async (dispatch) => {
    try {
        let d = await patchAddress(data, id);
        dispatch({ type: EDIT_ADDRESS, payload: { id, data } });
    } catch (e) {
        dispatch({ type: ADDRESS_ERROR });
        alert("something when wrong while editing address");
    }
}

