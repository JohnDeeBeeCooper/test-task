import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import formGroup from "../formGroup";

const ProductForm = props => {
  const { show, onHide, handleSubmit, reset, func, name, price } = props;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Create Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(func)}>
          <Field
            name="name"
            component={formGroup}
            props={{
              name: "Name",
              placeholder: "Enter product name",
              value: name || ""
            }}
          />

          <Field
            name="price"
            component={formGroup}
            props={{
              name: "Price",
              placeholder: "Enter product price",
              value: price || ""
            }}
          />
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const productForm = reduxForm({
  form: "ProductForm"
})(ProductForm);

export default productForm;
