import { ADD_TO_CART, CART_TOTAL, DELETE_TO_CART, GET_CART, UPDATE_ORDER_DATA } from "./cart.actionTypes";

const initialState = {
    orderData: [],
    cartProducts: [],
    cartTotal: 0,
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case ADD_TO_CART: {
            if (!payload.status) payload.status = "pending"
            return {
                ...state,
                cartProducts: [...state.cartProducts, payload]
            }
        }

        case GET_CART: {
            return {
                ...state,
                cartProducts: [...payload]
            }
        }

        case DELETE_TO_CART: {
            let newCart = state.cartProducts.filter(p => p.id !== payload);
            return {
                ...state,
                cartProducts: newCart
            }
        }

        case CART_TOTAL: {
            return {
                ...state,
                cartTotal: +payload
            }
        }

        case UPDATE_ORDER_DATA: {
            return {
                ...state,
                orderData: [...state.orderData, payload]
            }
        }
        default: return state;

    }

}