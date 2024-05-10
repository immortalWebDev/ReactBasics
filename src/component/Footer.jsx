import { Container, Button } from "react-bootstrap";
import React,{useContext} from "react";
import { CartContext } from "./context/CartProvider";


const Footer = () => {

  const {handleShow} = useContext(CartContext)
  return (
    <>
      <div className="bg-light py-3 text-center">
        <Container>
          <Button variant="primary" onClick={handleShow}>See the Cart</Button>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#56CCF2",
          color: "white",
          padding: "40px",
          fontWeight: "bold",
          fontSize:"4rem"
        }}
      >
        The Generics
      </div>
    </>
  );
};

export default Footer;
