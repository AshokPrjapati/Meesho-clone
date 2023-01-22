import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const isAuth = false;

function AuthContextProvider({ children }) {
  const [state, setState] = useState(isAuth);

  const loginUser = () => {
    axios
      .patch("http://localhost:8080/auth", {
        isAuth: true,
      })
      .then((res) => {
        setState(res.data.isAuth);
      });
  };

  const logoutUser = () => {
    axios
      .patch("http://localhost:8080/auth", {
        isAuth: false,
      })
      .then((res) => {
        setState(res.data.isAuth);
      });
  };

  return (
    <AuthContext.Provider value={{ state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
