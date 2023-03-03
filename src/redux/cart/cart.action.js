import axios from "axios";
import { ADD_TO_CART, CART_ERROR, CART_LOADING, CART_TOTAL, DELETE_TO_CART, GET_CART, UPDATE_ORDER_DATA } from "./cart.actionTypes";
import { addCartProduct, deleteCartProduct, fetchCartProducts, updateOrder } from "./cart.api";


export const addToCart = (payload, Toast) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.post('/cart/add', payload);
        let data = await res.data;
        dispatch({ type: ADD_TO_CART, payload: data.cartProducts });
        Toast(`${d.title} is added to cart`, "success");
    } catch (error) {
        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong");
    }
}

export const getCartProducts = () => async (dispatch) => {
    try {
        let data = await fetchCartProducts();
        dispatch({ type: GET_CART, payload: data });

    } catch (e) {
        alert("something when wrong while fetching")
    }
};

export const removeCartProduct = (id) => async (dispatch) => {
    try {
        let data = await deleteCartProduct(id);
        dispatch({ type: DELETE_TO_CART, payload: id });
    } catch (e) {
        alert("something went wrong while removing product");
    }
}

export const orderSuccess = (data) => async (dispatch) => {
    try {
        let payload = await updateOrder(data);
        dispatch({ type: UPDATE_ORDER_DATA, payload })
    } catch (e) {
        alert("somewent went wrong while placing order")
    }
}

export const cartTotalPrice = (price) => async (dispatch) => {
    dispatch({ type: CART_TOTAL, payload: price })
}