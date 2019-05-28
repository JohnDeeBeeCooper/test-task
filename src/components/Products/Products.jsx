import React, { Component } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  fetchData,
  deleteData,
  createData,
  getData
} from "../../store/actions/data";
import { openForm, openModal } from "../../store/actions/other";
import { connect } from "react-redux";
import "../main.css";
import Form from "../../utils/Forms/ProductForm";
import DeleteModal from "../../utils/DeleteModal";

class Products extends Component {
  componentDidMount() {
    this.props.fetchData("products");
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
    this.props.createData("products", formData);
  };
  renderForm() {
    return (
      <Form
        show={this.props.formOpen}
        onHide={this.formOpening}
        func={this.postData}
      />
    );
  }
  renderModal() {
    const { modalOpen, openModal } = this.props;
    return (
      <DeleteModal show={modalOpen} onHide={openModal} func={this.deleteItem} />
    );
  }
  render() {
    return (
      <Container>
        <Helmet>
          <title>Products</title>
        </Helmet>
        {this.renderForm()}
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
                      onClick={() => this.props.openModal(item.id)}
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
    data: { products },
    formOpen,
    modalOpen
  } = data;
  return { products, formOpen, modalOpen };
};
const mapDispatchToProps = {
  fetchData,
  deleteData,
  openForm,
  createData,
  getData,
  openModal
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
