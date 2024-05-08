import { Container, Button } from "react-bootstrap";


const Footer = () => {
  return (
    <>
      <div className="bg-light py-3 text-center">
        <Container>
          <Button variant="primary">See the Cart</Button>
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
