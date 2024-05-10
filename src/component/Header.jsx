import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { CartContext } from "./context/CartProvider";
import './header.css'

const Header = () => {
  const { cart, handleShow } = useContext(CartContext);

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand as={NavLink} to="/" style={{ marginRight: "50px" }} activeClassName="active">
            Home
          </Navbar.Brand>
          <Navbar.Brand style={{ marginRight: "50px" }}>Store</Navbar.Brand>
          <Navbar.Brand as={NavLink} to="/about" activeClassName="active">
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
