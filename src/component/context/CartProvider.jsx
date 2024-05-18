import React, { createContext, useState ,useEffect} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        if (!userEmail) {
          throw new Error("User email not found");
        }
        const response = await fetch(
          `https://react-http-api-ae8f7-default-rtdb.firebaseio.com/cart/${userEmail.replace(".", "")}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (localStorage.getItem("token")) {
      fetchData();
    }
  }, []);

  

  return (
    <CartContext.Provider
      value={{
        showCart,
        handleClose,
        handleShow,
        cart,
        addToCart,
        handleRemove,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
