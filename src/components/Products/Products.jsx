import React, { Component } from 'react';
import { Table, Button, FormCheck } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { fetchData } from '../../store/actions/index';
import { connect } from 'react-redux';
import '../main.css';

class Products extends Component {

    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        return (
            <div className="main">
                <Helmet>
                    <title>Products</title>
                </Helmet>
                <div className="header">
                    <h1>Product List</h1>
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
                        {this.props.products.map((item, id) => <tr key={id}>{Object.keys(item).map((product, idx) => idx <= 2 ? <td key={idx}>{item[product]}</td> : null)}</tr>)}
                    </tbody>
                </Table>
            </div>
        );
    };
}

const mapStateToProps = ({ data }) => {
    const { products } = data;
    return { products };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData('products'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);