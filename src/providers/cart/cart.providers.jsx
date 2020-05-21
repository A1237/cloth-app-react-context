import React, { useState, createContext, useEffect } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  getCartItemsCount,
  getTotalPriceCount,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  clearItem: () => {},
  cartItemsCount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);
  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));

  const clearItem = (item) =>
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotal(getTotalPriceCount(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        removeItem,
        clearItem,

        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
