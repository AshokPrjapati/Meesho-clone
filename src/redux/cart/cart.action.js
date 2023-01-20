import { CART_TOTAL, DELETE_TO_CART, GET_CART } from "./cart.actionTypes";
import { deleteCartProduct, fetchCartProducts } from "./cart.api";


export const getCartProducts = () => async (dispatch) => {
    try {
        let data = await fetchCartProducts();
        dispatch({ type: GET_CART, payload: data });

    } catch (e) {
        alert("something when wrong while fatching")
    }
};

export const removeCartProduct = (id) => async (dispatch) => {
    try {
        let data = await deleteCartProduct(id);
        dispatch({ type: DELETE_TO_CART, payload: id });
    } catch (e) {
        alert("something when wrong while removing product");
    }
}

export const cartTotalPrice = (price) => async (dispatch) => {
    dispatch({ type: CART_TOTAL, payload: price })
}