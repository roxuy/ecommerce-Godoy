import React from 'react'
import Button from '@restart/ui/esm/Button';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Jacaranda plants</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-center">
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#shipments">Shipments</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
