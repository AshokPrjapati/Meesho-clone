import axios from "axios";
import { ADD_CART_SUCESS, CART_ERROR, CART_LOADING, CART_TOTAL, DELETE_TO_CART, GET_CART, ORDER_ERROR, ORDER_LOADING, PLACE_ORDER, QTY_UPDATE_SUCCESS, UPDATE_ORDER_DATA } from "./cart.actionTypes";


export const addToCart = (token, product, Toast) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        // adding product id to cart product
        const payload = { ...product, productID: product._id }

        // removing default _id from product
        delete payload._id;

        // passing payload as request body to server
        let res = await axios.post('/cart/add', payload, { headers: { 'Authorization': token } });

        // if product already exists in cart
        if (res.data.status === 201) {
            dispatch({ type: CART_ERROR, payload: res.data.message || "Something went wrong" });
            return Toast(res.data.message, "info");
        }

        // adding product to cart state
        let data = await res.data.cartProduct;
        dispatch({ type: ADD_CART_SUCESS, payload: data });

        // success message
        Toast(`${data.title} is added to cart`, "success");
    } catch (error) {

        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.response?.data?.message || "Something went wrong", "error");

    }
}


// for getting all cart products
export const getCartProducts = (token, Toast) => async (dispatch) => {

    dispatch({ type: CART_LOADING });

    try {

        let res = await axios.get(`/cart/getcart`, { headers: { 'Authorization': token } });
        let { cartProducts, total } = await res.data;
        dispatch({ type: GET_CART, payload: { cartProducts, total } });

    } catch (error) {

        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.response?.data?.message || "Something went wrong while fetching cart data", "error");

    }
};


// for removing product from cart
export const removeCartProduct = (id, token, Toast, onClose) => async (dispatch) => {

    dispatch({ type: CART_LOADING });

    try {

        let res = await axios.delete(`/cart/remove/${id}`, { headers: { 'Authorization': token } });

        // destructuring to get cart products and total price of cart
        const { cartProducts, total } = await res.data;
        dispatch({ type: DELETE_TO_CART, payload: { cartProducts, total } });

        // closing the modal after succesfully removing the product
        onClose();
        Toast(`product is removed from cart`, "success");

    } catch (error) {

        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.response?.data?.message || "Something went wrong" });
        Toast(error.response?.data?.message || "Something went wrong while removing product from cart", "error");

    }
}

// for getting total of cart
export const updateCartProductQuantity = (id, quantity, token, Toast) => async (dispatch) => {

    dispatch({ type: CART_LOADING });

    try {

        let res = await axios.patch(`/cart/update/${id}`, { quantity }, { headers: { 'Authorization': token } });
        const { cartProducts, total } = await res.data;
        dispatch({ type: QTY_UPDATE_SUCCESS, payload: { cartProducts, total } });

    } catch (error) {

        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong while updating cart quantity", "error");

    }
}

// for getting ccart total
export const getCartTotal = (token, Toast) => async (dispatch) => {

    dispatch({ type: CART_LOADING });

    try {

        let res = await axios.get(`/cart/carttotal`, { headers: { 'Authorization': token } });
        const total = await res.data.total;
        dispatch({ type: CART_TOTAL, payload: total });

    } catch (error) {

        console.log(error);
        dispatch({ type: CART_ERROR, payload: error.message || "Something went wrong" });
        Toast(error.message || "Something went wrong while fetching cart total", "error");

    }
}

// for placing order
export const order = (token, Toast, router, setLoad) => async (dispatch) => {
    setLoad(true);
    try {
        let res = await axios.get(`cart/order`, { headers: { 'Authorization': token } });
        let { orderItems, total } = await res.data;
        dispatch({ type: PLACE_ORDER, payload: orderItems });
        router.push("/cart/success");
        Toast("Order Placed Succesfully", "success");
        Toast("Redirectring to summary page...", "info");
        setLoad(false);

    } catch (error) {
        console.log(error);
        setLoad(false);
        Toast(error.response?.data?.message || "Something went wrong while placing order", "error");
    }
}


