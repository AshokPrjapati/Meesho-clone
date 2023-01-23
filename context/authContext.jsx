import React, { useState } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const isAuth = false;

function AuthContextProvider({ children }) {
  const [state, setState] = useState(isAuth);

  const loginUser = () => {
    axios
      .patch("https://lazy-erin-caridea-veil.cyclic.app/", {
        isAuth: true,
      })
      .then((res) => {
        setState(res.data.isAuth);
      });
  };

  const logoutUser = () => {
    axios
      .patch("https://lazy-erin-caridea-veil.cyclic.app/", {
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
