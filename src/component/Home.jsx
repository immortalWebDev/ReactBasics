import React from "react";

import Footer from "./Footer";
import CardComponent from "./CardComponent";
import Cart from "./Cart";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2 className="display-2 text-white">The Generics</h2>
      </div>

      <CardComponent></CardComponent>

      <Cart />

      <Footer></Footer>
    </>
  );
};

export default Home;
