import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Navbar>
            <Navbar.Brand className="navbar-brand">
                <Link to="/">Invoice App</Link>
            </Navbar.Brand>
            <Nav>
                <NavItem>
                    <Link to="/invoices">Invoices</Link>
                </NavItem>
                <NavItem>
                    <Link to="/products">Products</Link>
                </NavItem>
                <NavItem>
                    <Link to='/customers'>Customers</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
};
export default NavBar;
