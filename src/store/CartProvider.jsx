import { useState,useEffect } from 'react';

import CartContext from './cart-context';


const CartProvider = (props) => {
  const [items, setItmes] = useState([])

  const addItemToCartHandler = (item) => {

    setItmes([...items,item])
    
  };

  const removeItemFromCartHandler = (id) => {
    
  };

  // Function to calculate the total amount of items in the cart
  const calculateTotalAmount = () => {
    // Use reduce method to sum up the total price of all items in the cart
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


  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,

  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;




