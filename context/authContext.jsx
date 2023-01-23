import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const isAuth = false;

function AuthContextProvider({ children }) {
  const [state, setState] = useState(isAuth);

  const loginUser = async (isAuth) => {
    try {
      let res = await axios.patch(
        "https://lazy-erin-caridea-veil.cyclic.app/auth",
        { isAuth }
      );
      setState(isAuth);
    } catch (e) {
      console.log(e);
    }
  };

  const logoutUser = async () => {
    try {
      let res = await axios.patch(
        "https://lazy-erin-caridea-veil.cyclic.app/auth",
        { isAuth: false }
      );
      setState(false);
      return state;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider value={{ state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
