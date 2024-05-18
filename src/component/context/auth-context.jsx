import React, { useState, useContext ,useEffect} from "react";
import { CartContext } from "./CartProvider";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
const {setCart,cart} = useContext(CartContext)

  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    console.log("Logged in and saved token");
    console.log("Log out status: ", userIsLoggedIn);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail"); // Also remove the userEmail from local storage
    console.log("Logged out and removed token and email from LS");
    console.log("Log out status: ", userIsLoggedIn);

    setCart([]) //Cleared cart once user logs out
  };

   // Use useEffect to monitor cart changes
   useEffect(() => {
    console.log("Cart updated upon setCart() call: ", cart.length);
  }, [cart]);

  const contextValue = {
      token:token,
      isLoggedIn:userIsLoggedIn,
      login:loginHandler,
      logout:logoutHandler,
  }

  return (
    <AuthContext.Provider
      value={contextValue}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
