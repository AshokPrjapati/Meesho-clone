import { ADDRESS_ERROR, ADDRESS_LOADING, EDIT_ADDRESS, GET_ADDRESS, POST_ADDRESS } from "./address.types";


const initialState = {
    loading: false,
    addressData: [],
    error: ""
}

export const addressReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case ADDRESS_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_ADDRESS: {
            return {
                ...state,
                loading: false,
                addressData: payload
            }
        }

        case POST_ADDRESS: {
            return {
                ...state,
                loading: false,
                addressData: [...state.addressData, payload]
            }
        }

        case EDIT_ADDRESS: {
            let updatedAddress = state.addressData.map((d) => {
                if (d.id === payload.id) {
                    d = { ...d, ...payload.data }
                }
                return d;
            })

            return {
                ...state,
                loading: false,
                addressData: [...updatedAddress]
            }
        }

        case ADDRESS_ERROR: {
            return {
                ...state,
                loading: false
            }
        }

        default: return state;

    }

}