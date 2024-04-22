import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">The Generics</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="https://www.youtube.com/">Youtube</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/">linkedin</Nav.Link>
              <Nav.Link href="https://open.spotify.com/">Spotify</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
};

export default Footer;
