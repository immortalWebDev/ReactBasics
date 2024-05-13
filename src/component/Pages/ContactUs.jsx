import React, { useState } from "react";
import "./ContactUs.css";
import Cart from "../Cart";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, //computed prop name
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://react-http-api-ae8f7-default-rtdb.firebaseio.com/ecommerce.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed t store data on firebase");
      }

      const data = await response.json();
      console.log("Data sucessfully stored on firebase",data);
      

      setFormData({
        username: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error storing data:", error);
      setFormData({
        username: "",
        email: "",
        phone: "",
      });
    }

   
  };

  return (
    <div className="contact-form-container">
        <Cart></Cart>
      <h2>Contact Us</h2>
      <form onSubmit={submitHandler} className="contact-form">
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
