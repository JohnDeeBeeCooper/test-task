import React, { Component } from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import formGroup from "../formGroup";

class HandleForm extends Component {
  renderForm() {
    const { show, onHide, handleSubmit, reset, func } = this.props;
    console.log(this.props);
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Field
              name="name"
              component={formGroup}
              props={{ name: "Name", placeholder: "Enter product name" }}
            />

            <Field
              name="price"
              component={formGroup}
              props={{ name: "Price", placeholder: "Enter product price" }}
            />
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => handleSubmit(func)}
            >
              Save changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  render() {
    return this.renderForm();
  }
}

const handleForm = reduxForm({
  form: "HandleForm"
})(HandleForm);

export default handleForm;
