import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response =  await fetch("https://react-ecom-d1f93-default-rtdb.firebaseio.com/ecom.json", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
              "Content-type":"application/json",
          }
      });
      const newData = await response.json();
       setFormData((prevData) => {
         return { ...prevData, newData };
       });
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
  };

  return (
      <div className="container">
          <br/>
          <h2>Contact Us</h2>
          <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address :</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number :</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
         <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
