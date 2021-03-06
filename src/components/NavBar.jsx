import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand >
        <NavLink to="/">Jacaranda plants</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="text-center">
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#shipments">Shipments</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#cart"><CartWidget /></Nav.Link>
        </Nav>  
      </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
};

export default NavBar;
