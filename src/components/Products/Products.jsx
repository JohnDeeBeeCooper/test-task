import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../style.css';

export default (props) => {
    return (
        <div className="main">
            <Helmet>
                <title>Products</title>
            </Helmet>
            <div className="header">
                <h1>Product List</h1>
                <Button>Create</Button>
            </div>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(item => <tr>{Object.keys(item).map((product, idx) => idx <= 2 ? <td>{item[product]}</td> : null)}</tr>)}
                </tbody>
            </Table>
        </div>
    );
}