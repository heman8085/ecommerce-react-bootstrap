import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { EcomContext } from "../store/EcomContext";
import "./ProductDetail.css";

const ProductDetail = ({ products }) => {
  const { addToCartHandler } = useContext(EcomContext);
  const { productId } = useParams();

  // Find the product with the matching ID
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="image-container">
            <Image src={product.imageUrl} alt={product.title} />
          </div>
        </Col>
        <Col>
          <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <Button variant="primary" onClick={() => addToCartHandler(product)}>
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
