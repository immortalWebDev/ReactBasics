import React, { createContext, useState } from "react";
import { cartElements } from "../cartElements";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState(cartElements);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product exists, update its quantity
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity -= 1;

    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
  };

  const contextValue = { cart, handleShow };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        showCart,
        handleClose,
        handleShow,
        cartElements,
        handleRemove,
        contextValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
