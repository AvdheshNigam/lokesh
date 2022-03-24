import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="section-not-found">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
            <h1>Page Not Found</h1>
            <Link to="/">Go to Home Page</Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
