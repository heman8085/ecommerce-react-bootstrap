import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="text-center">About Us</h1>
          <p className="text-center">
            Welcome to The Generics! We are a leading online store providing
            high-quality products.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae lectus non eros consequat fermentum. Duis eget tortor vel
            lorem maximus placerat. Phasellus sed odio non urna tristique
            ultricies. Vivamus scelerisque justo eu libero blandit fermentum.
            Sed vitae metus ac libero lobortis varius. Phasellus tristique elit
            quis purus accumsan, in accumsan lorem finibus. Nulla facilisi.
            Proin at odio at sapien aliquam fringilla. Vivamus ultricies
            ultrices mauris, eget tristique odio. Aliquam erat volutpat.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
