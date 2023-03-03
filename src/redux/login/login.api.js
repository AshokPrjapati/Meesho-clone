import axios from "axios"



export const userLogin = async (obj) => {
    try {
        let res = await axios.post(`/user/login`, obj);

        return res
    } catch (error) {
        return error

    }


}

export const userSignup = async (obj) => {

    try {
        let res = await axios.post(`/user/register`, obj);

        return res;
    } catch (error) {
        return error
    }

}

