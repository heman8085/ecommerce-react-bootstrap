import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col className="text-center">
          <h1>About Us</h1>
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
