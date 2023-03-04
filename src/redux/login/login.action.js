



import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./login.actionTypes";
import { userLogin, userSignup } from "./login.api";


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
        } else {
            let { message } = data;
            dispatch({ type: AUTH_ERROR });
            Toast(message, "info");
        }

    } catch (error) {
        dispatch({ type: AUTH_ERROR });
        Toast(error.message, "error");
    }

}

export const signup = (data) => async (dispatch) => {

    try {
        let s = await userSignup(data);
        if (s.data.status === 200) {
            dispatch({ type: AUTH_SIGNUP });
            alert(`Signup successfull`);

        } else if (d.data.status === undefined) {
            alert("something went wrong with server try again later")
        } else {
            alert(s.data.message)
            dispatch({ type: AUTH_ERROR });
        }

    } catch (e) {
        alert("something when wrong while fetching")
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
        Toast(error.message, "error");
    }
}
