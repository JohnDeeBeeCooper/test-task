import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import formGroup from "../formGroup";

const CustomerForm = props => {
  const {
    show,
    onHide,
    handleSubmit,
    reset,
    func,
    name,
    address,
    phone
  } = props;
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Create Customer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(func)}>
          <Row>
            <Col>
              <Field
                name="name"
                component={formGroup}
                props={{
                  name: "Name",
                  placeholder: "Enter customer name",
                  type: "text",
                  value: name || ""
                }}
              />
            </Col>
            <Col>
              <Field
                name="phone"
                component={formGroup}
                props={{
                  name: "Phone",
                  placeholder: "Enter customer phone",
                  type: "number",
                  value: phone || ""
                }}
              />
            </Col>
          </Row>
          <Field
            name="address"
            component={formGroup}
            props={{
              name: "Address",
              placeholder: "Enter customer address",
              type: "text",
              value: address || ""
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

const customerForm = reduxForm({
  form: "CustomerForm"
})(CustomerForm);

export default customerForm;
