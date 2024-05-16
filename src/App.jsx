import React from "react";
import { CartProvider } from "./component/context/CartProvider";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Router from "./component/Pages/Router";
import Footer from "./component/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
