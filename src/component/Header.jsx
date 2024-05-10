import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { CartContext } from "./context/CartProvider";

const Header = () => {
  const { cart, handleShow } = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand as={Link} to="/" style={{ marginRight: "50px" }}>
            Home
          </Navbar.Brand>
          <Navbar.Brand style={{ marginRight: "50px" }}>Store</Navbar.Brand>
          {/* <Navbar.Brand>About</Navbar.Brand> */}
          <Navbar.Brand as={Link} to="/about">
            About
          </Navbar.Brand>
        </Container>
        <Button
          className="ml-auto"
          onClick={handleShow}
          style={{ marginRight: "10px" }}
        >
          Cart: {cart.length}
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
