import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <Navbar default collapseOnSelect>
            <Navbar.Brand>
                <Link to="/">Invoice App</Link>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <NavItem>
                        <Link to="/">Invoices</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/products">Products</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/customers'>Customers</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default NavBar;
