import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import Invoices from './Invoices/List/List';
import { Button } from 'react-bootstrap';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route path='/customers' component={Customers} />
                    <Route path='/products' component={Products} />
                    <Route exact path='/' component={Invoices} />
                </div>
            </Router>
        );

    }
}