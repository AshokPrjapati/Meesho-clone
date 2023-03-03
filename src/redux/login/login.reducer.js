import { AUTH_ERROR, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./login.actionTypes";

const initialState = {
    token:"",
    error:false,
    loading:true,
    credentials:{}
}

export const loginReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case AUTH_LOGIN: {
            
          
            return {
                ...state,
                loading:true,
               token:payload.token,
               credentials:payload,
               error:false,
               loading:false
            }
        }

        case AUTH_LOGOUT: {
            return {
                ...state,
                token:"",
                credentials:{},
                error:false,
                loading:false
            }
        }

        case AUTH_SIGNUP: {
          
            return {
                ...state,
                

            }
        }

      case AUTH_ERROR:{
        return{
            ...state,
            error:true
        }

      }
        default: return state;

    }

}