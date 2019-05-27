import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  fetchData,
  deleteData,
  createData,
  getData
} from "../../store/actions/data";
import { openForm } from "../../store/actions/form";
import { connect } from "react-redux";
import "../main.css";
import Form from "../../utils/Forms/ProductForm";

class Products extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  formOpening = id => {
    this.props.openForm();
    if (id) {
      this.props.getData("products", id);
    }
  };
  deleteItem = id => {
    this.props.deleteData("products", id);
  };
  postData = formData => {
    console.log(formData);
    this.props.createData("products", formData);
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
      <div className="main">
        <Helmet>
          <title>Products</title>
        </Helmet>
        {this.renderModal()}
        <div className="header">
          <h1>Product List</h1>
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
              <th>Price</th>
              <th className="extra-column" />
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((item, id) => (
              <tr key={id}>
                {Object.keys(item).map((product, idx) =>
                  idx <= 2 ? <td key={idx}>{item[product]}</td> : null
                )}
                <td className="hidden-cell">
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
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const {
    data: { products },
    formOpen
  } = data;
  return { products, formOpen };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData("products")),
    deleteData: (url, id) => dispatch(deleteData(url, id)),
    openForm: () => dispatch(openForm()),
    createData: (url, data) => dispatch(createData(url, data)),
    getData: (url, id) => dispatch(getData(url, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
