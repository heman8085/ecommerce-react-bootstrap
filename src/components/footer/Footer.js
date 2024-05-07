import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
      <Container fluid="md">
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="https://www.youtube.com/">YouTube</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/">LinkedIn</Nav.Link>
          <Nav.Link href="https://open.spotify.com/">Spotify</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;







