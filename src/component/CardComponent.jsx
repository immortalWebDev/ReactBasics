import React, { useContext } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { productsArr } from "./productsArr";
import { CartContext } from "./context/CartProvider";

const CardComponent = () => {

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Container className="my-4">
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card style={{ maxWidth: "25rem", marginLeft: "60px" }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardComponent;
