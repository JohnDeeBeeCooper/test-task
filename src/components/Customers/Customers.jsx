import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../style.css';

export default (props) => {
    return (
        <div className="main">
            <Helmet>
                <title>Customers</title>
            </Helmet>
            <div className="header">
                <h1>Customer List</h1>
                <Button>Create</Button>
            </div>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers.map(item => <tr>{Object.keys(item).map((product, idx) => idx <= 3 ? <td>{item[product]}</td> : null)}</tr>)}
                </tbody>
            </Table>
        </div>
    );
}