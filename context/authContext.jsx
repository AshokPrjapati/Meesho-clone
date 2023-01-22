import React,{useState} from "react";
import axios from "axios";

export const AuthContext=React.createContext();


const isAuth=false;

function AuthContextProvider({children}){

    const [state,setState]=useState(isAuth);

    const loginUser=()=>{
        setState(true)
        axios.patch("http://localhost:8080/auth",{
            isAuth:true
        })
    }

    const logoutUser=()=>{
        setState(false)
        axios.patch("http://localhost:8080/auth",{
            isAuth:false
        })
    }

    return (
        <AuthContext.Provider value={{isAuth,loginUser,logoutUser}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;