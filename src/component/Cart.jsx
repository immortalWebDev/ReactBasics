import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "./context/CartProvider";

const Cart = () => {
    
  const { showCart, handleClose, cartElements,cart,handleRemove } = useContext(CartContext);


  return (
    <>
      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Your cart is empty
            </p>
          ) : (
            cart.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <Button
                      variant="danger"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
