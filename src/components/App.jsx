import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import Invoices from './Invoices/List/List';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route path='/customers' component={Customers} />
                    <Route path='/products' component={Products} />
                    <Route path='/invoices' component={Invoices} />
                </div>
            </Router>
        );

    }
}