import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="/images/logo.svg" alt="urluckyturtle" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              {/* <Nav.Link href="/" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link> */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
