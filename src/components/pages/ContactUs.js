import React, { useState } from "react";
import { Form, Button ,Container,Row,Col} from "react-bootstrap";

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
    <Container className="mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
