import axios from "axios";
import { ADD_TO_CART, CART_ERROR, CART_LOADING, CART_TOTAL, DELETE_TO_CART, GET_CART, ORDER_ERROR, ORDER_LOADING, PLACE_ORDER, UPDATE_ORDER_DATA } from "./cart.actionTypes";
import { addCartProduct, deleteCartProduct, fetchCartProducts, updateOrder } from "./cart.api";


export const addToCart = (payload, Toast) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.post('/cart/add', payload);
        let data = await res.data.cartProduct;
        dispatch({ type: ADD_TO_CART, payload: data });
        Toast(`${data.title} is added to cart`, "success");
    } catch (error) {
        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong", "error");
    }
}

export const getCartProducts = (Toast) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.get(`/cart/getcart`);
        let data = await res.data.cartProducts;
        dispatch({ type: GET_CART, payload: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error || "Something went wrong while fetching cart data", "error");
    }
};

export const removeCartProduct = (id, Toast) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.delete("/cart/remove", { id });
        const data = await res.data.cartProducts;
        dispatch({ type: DELETE_TO_CART, payload: data });
        Toast(`product is removed from cart`, "success");
    } catch (e) {
        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong while removing product from cart", "error");
    }
}

export const cartTotalPrice = () => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.get("/cart/carttotal",);
        const payload = await res.data.total;
        dispatch({ type: CART_TOTAL, payload });
    } catch (e) {
        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong while removing product from cart", "error");
    }
}

export const orderSuccess = () => async (dispatch) => {
    dispatch({ type: ORDER_LOADING });
    try {
        let res = await axios.post(`cart/order`);
        let payload = await res.data.orderItems;
        dispatch({ type: PLACE_ORDER, payload });
    } catch (e) {
        console.log(error);
        dispatch({ type: ORDER_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong while placing order", "error");
    }
}
