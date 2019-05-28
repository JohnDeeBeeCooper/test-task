import React from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { reduxForm, Field } from "redux-form";
import formGroup from "../formGroup";
import { connect } from "react-redux";

const CustomerForm = props => {
  const { show, onHide, handleSubmit, reset, func } = props;
  console.log("log");
  console.log(props.initialValues);
  const onClose = id => {
    console.log("closeId" + id);
    onHide(id);
  };
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
                  type: "text"
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
                  type: "text"
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
  const { formData } = data;
  return { initialValues: formData };
};
export default connect(mapStateToProps)(customerForm);
