import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import HandleFormGroup from "../HandleFormGroup";
import { connect } from "react-redux";

const CustomerForm = props => {
  const { show, onHide, handleSubmit, reset, func, formAction } = props;
  const onClose = () => {
    reset();
    onHide();
  };
  const title = formAction === "EDIT" ? "Edit customer" : "Create customer";
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(func)}>
          <Row>
            <Col>
              <Field
                name="name"
                component={HandleFormGroup}
                props={{
                  name: "Name",
                  placeholder: "Enter customer name",
                  type: "text"
                }}
              />
            </Col>
            <Col>
              <Field
                name="phone"
                component={HandleFormGroup}
                props={{
                  name: "Phone",
                  placeholder: "Enter customer phone",
                  type: "text"
                }}
              />
            </Col>
          </Row>
          <Field
            name="address"
            component={HandleFormGroup}
            props={{
              name: "Address",
              placeholder: "Enter customer address",
              type: "text"
            }}
          />
          <Button variant="secondary" onClick={() => onClose()}>
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

const customerForm = reduxForm({
  form: "CustomerForm",
  enableReinitialize: true
})(CustomerForm);

const mapStateToProps = ({ data }) => {
  const {
    form: { formData, formAction }
  } = data;
  return { initialValues: formData, formAction };
};
export default connect(mapStateToProps)(customerForm);
