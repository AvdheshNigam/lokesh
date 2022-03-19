import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Container fluid style={{ paddingLeft: "0", paddingRight: "0" }}>
      <Row>
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="http://www.grandledlight.com/images/emergency-bar-led-lights.jpg"
                alt="First slide"
                style={{ height: "450px" }}
              />
              <Carousel.Caption>
                <h3>Emergency LED Bar Lights</h3>
                <p>
                  Emergency LED Bar Lights - Manufacturers, Suppliers &#38;
                  Exporters in Delhi, India
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="http://www.grandledlight.com/images/car-accessoires-manufacturers.jpg"
                alt="Second slide"
                style={{ height: "450px" }}
              />
              <Carousel.Caption>
                <h3>Car Accessoires</h3>
                <p>
                  Car Accessories - Manufacturers, Suppliers &#38; Exporters in
                  Delhi, India
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://www.grandledlight.com/images/motorized-siren-220v-manufacturer.jpg"
                alt="Third slide"
                style={{ height: "450px" }}
              />
              <Carousel.Caption>
                <h3>Motorized Siren 220v</h3>
                <p>Motor Siren - Manufacturers, Suppliers &#38; Exporters</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselHome;
