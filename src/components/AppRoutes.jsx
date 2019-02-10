import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Customers from './Customers/Customers';
import Products from './Products/Products';
import Invoices from './Invoices/List/List';

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path='/customers' component={Customers} />
                <Route path='/products' component={Products} />
                <Route exact path='/' component={Invoices} />
            </Switch>
        </div>
    );

};

export default App;