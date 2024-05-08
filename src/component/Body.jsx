import React from "react";
import { Navbar, Container} from "react-bootstrap";
import Footer from "./Footer";
import CardComponent from "./CardComponent";

const Body = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand style={{ marginRight: '50px' }}>Home</Navbar.Brand>
          <Navbar.Brand style={{ marginRight: '50px' }}>Store</Navbar.Brand>
          <Navbar.Brand>About</Navbar.Brand>
        </Container>
        <Navbar.Brand className="ml-auto">Cart</Navbar.Brand>
      </Navbar>


      <div style={{ backgroundColor: 'gray', textAlign: 'center', padding: '20px' }}>
        <h2 className="display-2 text-white">The Generics</h2>
      </div>



      <CardComponent></CardComponent>

      <Footer></Footer>



    </>
  );
};

export default Body;
