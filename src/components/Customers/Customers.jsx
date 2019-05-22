import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { fetchData } from "../../store/actions/data";
import "../main.css";

class Customers extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
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
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((item, id) => (
              <tr key={id}>
                {Object.keys(item).map((customer, idx) =>
                  idx <= 3 ? <td key={idx}>{item[customer]}</td> : null
                )}
                <td>
                  <span className="hidden-container">edit</span>
                </td>
                <td>
                  <span className="hidden-container delete-item" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const {
    data: { customers }
  } = data;
  return { customers };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData("customers"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
