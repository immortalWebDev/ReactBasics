import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { CartContext } from "./context/CartProvider";
import "./header.css";
import AuthContext from "./context/auth-context";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const { cart, handleShow } = useContext(CartContext);

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logOutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  const handleStoreClick = (event) => {
    console.log("Clicked store");
    console.log("Log in status:", isLoggedIn);
    if (!isLoggedIn) {
      event.preventDefault();
      console.log("Redirecting to login page...");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand
            style={{ marginRight: "50px" }}
            as={NavLink}
            to="/"
            activeclassname="active"
          >
            Home
          </Navbar.Brand>
          <Navbar.Brand
            as={NavLink}
            to="/store"
            onClick={handleStoreClick} // Handle click event for Store page
            activeclassname="active"
            style={{ marginRight: "50px" }}
          >
            Store
          </Navbar.Brand>
          <Navbar.Brand as={NavLink} to="/about" activeclassname="active">
            About
          </Navbar.Brand>
          <Navbar.Brand
            as={NavLink}
            to="/contactus"
            activeclassname="active"
            style={{ marginLeft: "30px" }}
          >
            Contact us
          </Navbar.Brand>

          {!isLoggedIn && (
            <Navbar.Brand
              as={NavLink}
              to="/login"
              activeclassname="active"
              style={{ marginLeft: "30px" }}
            >
              Login
            </Navbar.Brand>
          )}

          {isLoggedIn && (
            <Navbar.Brand
              activeclassname="active"
              onClick={logOutHandler}
              style={{ marginLeft: "30px", cursor: "pointer" }}
            >
              Logout
            </Navbar.Brand>
          )}
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
