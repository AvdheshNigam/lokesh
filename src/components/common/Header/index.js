import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        {/* <Navbar bg="light" variant="light" expand="lg" className="custom-navbar"> */}
        <Container fluid>
          <Navbar.Brand href="/">Kumar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
