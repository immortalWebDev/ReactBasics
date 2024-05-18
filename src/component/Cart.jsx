import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "./context/CartProvider";
import AuthContext from "./context/auth-context";

const Cart = () => {
  const { showCart, handleClose, cart, handleRemove, setCart } =
    useContext(CartContext);

  const { isLoggedIn } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const userEmail = localStorage.getItem("userEmail");
          if (!userEmail) {
            throw new Error("User email not found");
          }

          const response = await fetch(
            `https://react-http-api-ae8f7-default-rtdb.firebaseio.com/cart/${userEmail.replace(
              ".",
              ""
            )}.json`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch cart data");
          }
          const data = await response.json();
          if (data !== null) {
            // Check if data is not null before setting the cart
            setCart(data);
            console.log(data);
          } else {
            console.error("No cart data found for the user:", userEmail);
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [isLoggedIn, setCart]);

  useEffect(() => {
    if (isLoggedIn) {
      const saveCartData = async () => {
        try {
          setIsLoading(true);
          const userEmail = localStorage.getItem("userEmail");
          if (!userEmail) {
            throw new Error("User email not found");
          }

          if (cart.length === 0) {
            // If cart is empty, delete the cart data from the database
            const deleteResponse = await fetch(
              `https://react-http-api-ae8f7-default-rtdb.firebaseio.com/cart/${userEmail.replace(
                ".",
                ""
              )}.json`,
              {
                method: "DELETE",
              }
            );
            if (!deleteResponse.ok) {
              throw new Error("Failed to delete cart data from the database");
            }
          } else {
            // Save cart data using PUT method if cart is not empty
            const saveResponse = await fetch(
              `https://react-http-api-ae8f7-default-rtdb.firebaseio.com/cart/${userEmail.replace(
                ".",
                ""
              )}.json`,
              {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (!saveResponse.ok) {
              throw new Error("Failed to save cart data");
            }
          }

          setIsLoading(false);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      };

      saveCartData();
    }
  }, [cart, setCart, isLoggedIn]);

  return (
    <>
      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "400px", overflowY: "auto" }}>
          {!isLoggedIn || cart.length === 0 ? (
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
                    src={item.images[0]}
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
