import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import HandleFormGroup from "../HandleFormGroup";
import { connect } from "react-redux";

const ProductForm = props => {
  const { show, onHide, handleSubmit, reset, func, formAction } = props;
  const onClose = formData => {
    func(formData);
    reset();
    onHide();
  };
  const title = formAction === "EDIT" ? "Edit product" : "Create product";
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onClose)}>
          <Field
            name="name"
            component={HandleFormGroup}
            props={{
              name: "Name",
              placeholder: "Enter product name"
            }}
          />

          <Field
            name="price"
            component={HandleFormGroup}
            props={{
              name: "Price",
              placeholder: "Enter product price"
            }}
          />
          <Button variant="secondary" onClick={onClose}>
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
  form: "ProductForm",
  enableReinitialize: true
})(ProductForm);

const mapStateToProps = ({ data }) => {
  const {
    form: { formData, formAction }
  } = data;
  return { initialValues: formData, formAction };
};
export default connect(mapStateToProps)(productForm);
