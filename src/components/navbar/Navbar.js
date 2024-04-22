import { useContext } from "react";
import {Container,Nav,Navbar,Badge,Button} from "react-bootstrap";
import { EcomContext } from "../store/EcomContext";


const Heading = () => {

  const { handleShow} = useContext(EcomContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">The Generics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Button variant="warning" onClick={handleShow}>
            Cart <Badge bg="danger">9</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
