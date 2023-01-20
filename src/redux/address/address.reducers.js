import { EDIT_ADDRESS, GET_ADDRESS, POST_ADDRESS } from "./address.types";


const initialState = {
    addressData: [],
}

export const addressReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case GET_ADDRESS: {
            return {
                addressData: payload
            }
        }

        case POST_ADDRESS: {
            return {
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
                addressData: [...updatedAddress]
            }
        }

        default: return state;

    }

}