import { ADD_TO_CART, CART_ERROR, CART_LOADING, CART_TOTAL, DELETE_TO_CART, GET_CART, UPDATE_ORDER_DATA } from "./cart.actionTypes";

const initialState = {
    loading: false,
    error: "",
    cartProducts: [],
    cartTotal: 0,
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case ADD_TO_CART: {
            return {
                ...state,
                cartProducts: [...payload]
            }
        }

        case CART_ERROR: {
            return {
                ...state,
                error: payload
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
                orderData: payload
            }
        }
        default: return state;

    }

}