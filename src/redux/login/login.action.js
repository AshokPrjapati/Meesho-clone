


import { useRouter } from "next/router";
import { AUTH_ERROR, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "./login.actionTypes";
import { userLogin, userSignup } from "./login.api";


export const login = (data) => async (dispatch) => {
 
    try {
        let d = await userLogin(data);
        console.log(d)
        
        if(d.data.status===200){
            let {token,credentials}=d.data
            dispatch({ type: AUTH_LOGIN, payload:{token,...credentials} });
            alert(`Login successfull`);
        
            
        }else if(d.data.status===undefined){
 alert("something went wrong with server try again later")

        }else{
            dispatch({ type: AUTH_ERROR});
            alert(d.data.message) 
        }
        
       
    } catch (e) {
        dispatch({ type: AUTH_ERROR});
        alert("something went wrong while login")
    }

}

export const signup = (data) => async (dispatch) => {
   
    try {
        let s = await userSignup(data);
      if(s.data.status===200){
        dispatch({ type: AUTH_SIGNUP });
        alert(`Signup successfull`);
      
      }else if(d.data.status===undefined){
        alert("something went wrong with server try again later")
      }else{
        alert(s.data.message)
        dispatch({ type: AUTH_ERROR});
      }
     
    } catch (e) {
        alert("something when wrong while fetching")
    }
}



export const logout=()=>(dispatch)=>{
    dispatch({type:AUTH_LOGOUT})
    return
}
