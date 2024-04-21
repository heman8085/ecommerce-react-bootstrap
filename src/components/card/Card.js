
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import productsArr from "./Data";
import "./Card.css";

const ProductCard = () => {
  return (
    <Container className="max-width-container">
      <Row xs={1} md={2} className="g-4 justify-content-center">
        {productsArr.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img
                variant="top"
                src={item.imageUrl}
                alt="data-img"
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price - {item.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCard;



