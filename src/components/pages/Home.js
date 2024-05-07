import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EcomContext } from "../store/EcomContext";

const Home = () => {

  const { userIsLoggedIn } = useContext(EcomContext);

  return (
    <Container className="mt-4">
      <Row>
        <Col className="text-center">
          <h1>Welcome to The Generics!</h1>
          <p>We are a leading online store providing high-quality products.</p>
          {userIsLoggedIn ? (
            <Button as={Link} to="/store" variant="primary">
              View Products
            </Button>
          ) : (
            <Button as={Link} to="/login" variant="primary">
              View Products
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
