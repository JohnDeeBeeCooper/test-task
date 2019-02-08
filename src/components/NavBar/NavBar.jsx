import React, { Component } from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <Link to="/">
                    Invoice App
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <Col>
                        <Link to="/">
                            Invoices
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/products">
                            Products
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/customers">
                            Customers
                        </Link>
                    </Col>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default NavBar;
