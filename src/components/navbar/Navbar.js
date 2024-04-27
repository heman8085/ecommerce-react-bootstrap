import React, { useContext } from "react";
import { Navbar, Container, Button, Badge,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EcomContext } from "../store/EcomContext";

const Heading = () => {
  const { handleShow, size } = useContext(EcomContext);

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link> 
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Button variant="warning" onClick={handleShow}>
            Cart <Badge bg="danger">{size}</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
