import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import Invoices from './Invoices/List/List';
import axios from 'axios';

export default class App extends Component {
    state = {}
    componentDidMount() {
        const url = '/api/';
        const urls = ['customers', 'products', 'invoices'];
        urls.forEach(item => {
            axios.get(url + item).then(res => {
                this.setState({ [`${item}`]: res.data });
            });
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route path='/customers' render={() => <Customers customers={this.state.customers} />} />
                    <Route path='/products' render={() => <Products func={this.handleClick} products={this.state.products} />} />
                    <Route exact path='/' component={Invoices} />
                </div>
            </Router>
        );

    }
}