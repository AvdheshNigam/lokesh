import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="custom-footer-parent">
      <div className="custom-footer">
        <p xs={{ order: "last" }}>
          &copy; Copyright, 2022, <Link to="/">urluckyturtle</Link>
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
    </section>
  );
};

export default Footer;
