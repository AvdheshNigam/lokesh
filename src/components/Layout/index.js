import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Layout = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={12}>
            <Header />
          </Col>
          <Col lg={12}>Layout</Col>
          <Col lg={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
