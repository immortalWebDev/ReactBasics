import React, { useState, useEffect } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCartHandler = (item) => {

    // // console.log(item)
    // const existingItemIndex = items.findIndex((cartItem) => cartItem.id === item.id);

    // if (existingItemIndex !== -1) {
    //   // Item already exists in the cart, update its quantity
    //   const updatedItems = [...items];
    //   console.log(...items)
    //   updatedItems[existingItemIndex].quantity += item.quantity;
    //   setItems(updatedItems);

    //   console.log(updatedItems)
    // } else {
    //   // Item does not exist in the cart, add it as a new item
      setItems((prevItems) => [...prevItems, item]);
    // }

        

  };

  // Function to remove an item from the cart (not implemented in this example)
  const removeItemFromCartHandler = (id) => {
    // Implement this function to remove an item from the cart based on its ID
    // Example:
    // const updatedItems = items.filter((item) => item.id !== id);
    // setItems(updatedItems);
  };

  // Function to calculate the total amount of items in the cart
  const calculateTotalAmount = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // State to manage the total amount in the cart
  const [totalAmount, setTotalAmount] = useState(0);

  // useEffect hook to update totalAmount when items change
  useEffect(() => {
    // Calculate the new total amount
    const newTotalAmount = calculateTotalAmount();
    // Update the totalAmount state with the new value
    setTotalAmount(newTotalAmount);
  }, [items]); // Re-run this effect whenever items change

  // Create the cart context object to provide to consumers
  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Render the CartContext.Provider with the cartContext value and child components
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;


