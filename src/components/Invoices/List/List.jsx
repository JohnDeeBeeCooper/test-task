import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './style.css';

export default (props) => {
    console.log(props);
    return (
        <div className="main">
            <Helmet>
                <title>Invoice App</title>
            </Helmet>
            <div className="header">
                <h1>Invoice List</h1>
                <Button variant="outline-secondary">Create</Button>
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
                    {props.list.map((item, id) => <tr key={id}>{Object.keys(item).map((row, idx) => idx <= 2 ? <td key={idx}>{item[row]}</td> : null)}</tr>)}
                </tbody>
            </Table>
        </div>
    );
}