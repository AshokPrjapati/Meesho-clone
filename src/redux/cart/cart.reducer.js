import { ADD_CART_SUCESS, CART_ERROR, CART_LOADING, CART_TOTAL, DELETE_TO_CART, GET_CART, ORDER_ERROR, ORDER_LOADING, PLACE_ORDER, QTY_UPDATE_SUCCESS } from "./cart.actionTypes";

const initialState = {
    loading: false,
    error: "",
    cartProducts: [],
    cartTotal: 0,
    orderData: [],
    orderTotal: 0
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case CART_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case ADD_CART_SUCESS: {
            return {
                ...state,
                loading: false,
                cartProducts: [...state.cartProducts, payload]
            }
        }

        case CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }

        case GET_CART: {
            return {
                ...state,
                loading: false,
                cartProducts: payload.cartProducts,
                cartTotal: payload.total
            }
        }

        case DELETE_TO_CART: {
            return {
                ...state,
                loading: false,
                cartProducts: payload.cartProducts,
                cartTotal: payload.total
            }
        }

        case QTY_UPDATE_SUCCESS: {
            return {
                ...state,
                loading: false,
                cartProducts: payload.cartProducts,
                cartTotal: payload.total
            }
        }

        case CART_TOTAL: {
            return {
                ...state,
                loading: false,
                cartTotal: payload
            }
        }

        case ORDER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case PLACE_ORDER: {
            let total = 0;
            payload.forEach(p => total += (+p.price) * (+p.quantity));
            return {
                ...state,
                loading: false,
                orderData: payload,
                orderTotal: total,
            }
        }

        case ORDER_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }

        default: return state;

    }

}