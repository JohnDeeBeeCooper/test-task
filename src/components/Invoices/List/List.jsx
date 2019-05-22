import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { fetchData } from "../../../store/actions/data";
import "../../main.css";

class Invoices extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
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
              <th>customer</th>
              <th>discount</th>
              <th>total</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.invoices.map((item, id) => (
              <tr key={id}>
                {Object.keys(item).map((row, idx) =>
                  idx <= 2 ? <td key={idx}>{item[row]}</td> : null
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
    data: { invoices }
  } = data;
  return { invoices };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData("invoices"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Invoices);
