import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <Footer className="custom-footer-parent">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="custom-footer">
              <p>
                &copy; Copyright, 2022, <span>urluckyturtle</span>
              </p>
              <Link to="/">
                <img src="images/logo.svg" />
              </Link>
              <ul>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
