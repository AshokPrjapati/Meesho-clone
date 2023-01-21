import { fetchAddress, patchAddress, postAddress } from "./address.api";
import { EDIT_ADDRESS, GET_ADDRESS, POST_ADDRESS } from "./address.types";



export const getAddress = () => async (dispatch) => {
    try {
        let data = await fetchAddress();
        dispatch({ type: GET_ADDRESS, payload: data });

    } catch (e) {
        alert("something when wrong while fatching")
    }
};

export const sendAddress = (data) => async (dispatch) => {
    try {
        let d = await postAddress(data);
        dispatch({ type: POST_ADDRESS, payload: data });
    } catch (e) {
        alert("something when wrong while removing product");
    }
}

export const editAddress = (id, data) => async (dispatch) => {
    try {
        let d = await patchAddress(data, id);
        dispatch({ type: EDIT_ADDRESS, payload: { id, data } });
    } catch (e) {
        alert("something when wrong while removing product");
    }
}

