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
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">PRODUCTS</Nav.Link>
              <NavDropdown
                title="REVOLVING LIGHTS"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  GM Revolving Light
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Oval Revolving Light
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Magnet Revolving Light
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Emergency Bar Light - Ambulance
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/siren">SIREN</Nav.Link>
              <Nav.Link href="/">BAR LIGHTS</Nav.Link>
              <Nav.Link href="/led">CAR ACCESSORIES</Nav.Link>
              <Nav.Link href="/led">EMERGENCY LIGHTS</Nav.Link>
              <Nav.Link href="/led">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
