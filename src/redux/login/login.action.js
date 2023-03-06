



import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./login.actionTypes";


export const login = (cred, router, Toast) => async (dispatch) => {

    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`/user/login`, cred);
        let data = res.data;

        if (data.status === 200) {
            let { credentials, message } = data;
            dispatch({ type: AUTH_LOGIN, payload: credentials });
            sessionStorage.setItem("user", JSON.stringify(credentials));
            Toast(message, "success");
            router.push("/");
            Toast("Redirectring to home page...", "info")
        } else {
            let { message } = data;
            dispatch({ type: AUTH_ERROR });
            Toast(message, "info");
        }

    } catch (error) {
        dispatch({ type: AUTH_ERROR });
        Toast(error.response?.data?.message, "error");
    }

}

// registering user to database
export const signup = (cred, router, Toast) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`/user/register`, cred);
        let data = await res.data;
        console.log(data);
        // if registration is succesfull
        if (data.status === 200) {
            dispatch({ type: AUTH_SIGNUP });
            Toast(data.message, "success");
            router.push("/login");
            Toast("Redirectring to login page...", "info")
        }
        // if user already exists
        else {
            dispatch({ type: AUTH_ERROR });
            Toast(data.message, "info");
        }
    } catch (error) {
        // server or internal error
        console.log(error)
        dispatch({ type: AUTH_ERROR });
        Toast(error.response?.data?.message || "something went wrong", "error");
    }
}



export const logout = (email, Toast) => async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`/user/logout`, { email });
        let data = await res.data;

        if (data.status === 200) {
            dispatch({ type: AUTH_LOGOUT, payload: data.message });
            sessionStorage.clear();;
            Toast(data.message, "success");
        } else {
            dispatch({ type: AUTH_ERROR });
            Toast(data.message, "info");
        }
    } catch (error) {
        dispatch({ type: AUTH_ERROR });
        Toast(error.response?.data?.message, "error");
    }
}
