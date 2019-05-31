import React, { Component } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { openForm, openModal, closeForm } from "../../store/actions/other";
import {
  fetchData,
  deleteData,
  createData,
  getData,
  updateData
} from "../../store/actions/data";
import "../main.css";
import Form from "../../utils/Forms/CustomerForm";
import DeleteModal from "../../utils/DeleteModal";

class Customers extends Component {
  componentDidMount() {
    this.props.fetchData("customers");
  }
  formOpening = (action, id) => {
    const { getData, openForm } = this.props;
    openForm(action);
    if (id) {
      getData("customers", id);
    }
  };
  deleteItem = id => {
    this.props.deleteData("customers", id);
  };
  postData = formData => {
    const { formAction, createData, updateData } = this.props;
    const { id } = formData;
    switch (formAction) {
      case "EDIT":
        updateData("customers", id, formData);
        break;
      case "CREATE":
        createData("customers", formData);
        break;
      default:
        console.log("ERROOOOOOOOORRRRRR" + formAction);
        break;
    }
  };
  renderForm() {
    const { isOpen, closeForm } = this.props;
    return <Form show={isOpen} onHide={closeForm} func={this.postData} />;
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
          <title>Customers</title>
        </Helmet>
        {this.renderForm()}
        {this.renderModal()}
        <div className="header">
          <h1>Customer List</h1>
          <Button
            variant="outline-secondary"
            onClick={() => this.formOpening("CREATE")}
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
                    <span onClick={() => this.formOpening("EDIT", item.id)}>
                      edit
                    </span>
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
    data: { customers },
    form: { isOpen, formAction },
    modalOpen
  } = data;
  return { customers, isOpen, modalOpen, formAction };
};
const mapDispatchToProps = {
  fetchData,
  deleteData,
  openForm,
  createData,
  getData,
  updateData,
  openModal,
  closeForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
