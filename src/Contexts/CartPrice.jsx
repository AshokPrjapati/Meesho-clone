import { createContext, useState } from "react";

export const cartPriceContext = createContext();

import React from "react";

const CartPrice = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const handlePrice = (price) => {
    setTotalPrice(price);
  };
  return (
    <cartPriceContext.Provider value={{ totalPrice, handlePrice }}>
      {children}
    </cartPriceContext.Provider>
  );
};

export default CartPrice;
