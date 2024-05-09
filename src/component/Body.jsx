import React, { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import Footer from "./Footer";
import CardComponent from "./CardComponent";
import Cart from "./Cart";
import { CartContext } from "./context/CartProvider";

const Body = () => {

  const {cart,handleShow} = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand style={{ marginRight: "50px" }}>Home</Navbar.Brand>
          <Navbar.Brand style={{ marginRight: "50px" }}>Store</Navbar.Brand>
          <Navbar.Brand>About</Navbar.Brand>
        </Container>
        <Button
          className="ml-auto"
          onClick={handleShow}
          style={{ marginRight: "10px" }}
        >
          Cart: {cart.length}
        </Button>
      </Navbar>

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

      <Cart/>

      <Footer></Footer>
    </>
  );
};

export default Body;
