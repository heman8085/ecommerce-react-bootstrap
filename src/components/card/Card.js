import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import productsArr from "./Data";
import { EcomContext } from "../store/EcomContext";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { addToCartHandler } = useContext(EcomContext);

  return (
    <Container style={{ marginTop: "30px", marginBottom: "60px" }}>
      <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
        {productsArr.map((item) => (
          <Col key={item.id}>
            <Card  className="h-100">
              <Link
                to={`/products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card.Img variant="top" src={item.imageUrl} alt="data-img" />
              </Link>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price - ${item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => addToCartHandler(item)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCard;
