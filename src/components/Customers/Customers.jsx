import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../main.css';

export default (props) => {
    console.log(props);
    return (
        <div className="main">
            <Helmet>
                <title>Customers</title>
            </Helmet>
            <div className="header">
                <h1>Customer List</h1>
                <Button variant="outline-secondary">Create</Button>
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
                    {props.customers.map((item, id) => <tr key={id}>{Object.keys(item).map((customer, idx) => idx <= 3 ? <td key={idx}>{item[customer]}</td> : null)}</tr>)}
                </tbody>
            </Table>
        </div>
    );
}