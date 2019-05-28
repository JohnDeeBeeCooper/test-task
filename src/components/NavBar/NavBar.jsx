import React from "react";
import { Navbar, Nav, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Invoice App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Col>
              <Link to="/">Invoices</Link>
            </Col>
            <Col>
              <Link to="/products">Products</Link>
            </Col>
            <Col>
              <Link to="/customers">Customers</Link>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
