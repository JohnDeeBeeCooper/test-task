import React, { Component } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { openForm } from "../../store/actions/other";
import {
  fetchData,
  deleteData,
  createData,
  getData
} from "../../store/actions/data";
import "../main.css";
import Form from "../../utils/Forms/CustomerForm";
import API from "../../api/";

class Customers extends Component {
  componentDidMount() {
    this.props.fetchData("customers");
  }
  formOpening = id => {
    console.log("id" + id);
    this.props.openForm();
    if (id) {
      this.props.getData("customers", id);
    }
  };
  deleteItem = id => {
    this.props.deleteData("customers", id);
  };
  postData = formData => {
    this.props.createData("customers", formData);
  };
  renderModal() {
    return (
      <Form
        show={this.props.formOpen}
        onHide={this.formOpening}
        func={this.postData}
      />
    );
  }
  render() {
    return (
      <Container>
        <Helmet>
          <title>Customers</title>
        </Helmet>
        {this.renderModal()}
        <div className="header">
          <h1>Customer List</h1>
          <Button
            variant="outline-secondary"
            onClick={() => this.formOpening()}
          >
            Create
          </Button>
        </div>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th className="extra-column" />
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((item, id) => (
              <tr key={id}>
                {Object.keys(item).map((customer, idx) =>
                  idx <= 3 ? <td key={idx}>{item[customer]}</td> : null
                )}
                <td>
                  <div className="hidden-container">
                    <span onClick={() => this.formOpening(item.id)}>edit</span>
                    <span
                      onClick={() => this.deleteItem(item.id)}
                      className="delete-item"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const {
    data: { customers },
    formOpen
  } = data;
  return { customers, formOpen };
};
const mapDispatchToProps = {
  fetchData,
  deleteData,
  openForm,
  createData,
  getData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
