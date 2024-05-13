import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../productsArr";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartProvider";
import Cart from "../Cart";

function ProductDetail() {
  const { addToCart } = useContext(CartContext);
  const { productId } = useParams(); // Get product ID from route parameters

  const [selectedImage, setSelectedImage] = useState(null); // State to track selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Find the product with the matching ID
  const product = productsArr.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to open modal and set selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Cart></Cart>
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Selected Image</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Selected Image"
            style={{ width: "100%" }}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
      <div style={{marginLeft:"20px"}}>
        <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>
          {product.title}
        </h2>
        <hr />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                marginBottom: "10px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(image)} // Add click event handler to open modal
            />
          ))}
        </div>
        <div style={{ margin: "20px 0" }}>
          <h3>Details:</h3>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}/5 ({product.reviews}{" "}
            reviews)
          </p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h4>Specifications:</h4>
          <p>
            <strong>Size:</strong> {product.specifications.size}
          </p>
          <p>
            <strong>Dimensions:</strong> {product.specifications.dimensions}
          </p>
          <p>
            <strong>Weight:</strong> {product.specifications.weight}
          </p>
          <p>
            <strong>Material:</strong> {product.specifications.material}
          </p>
        </div>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>{" "}
      </div>
    </div>
  );
}

export default ProductDetail;
