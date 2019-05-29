import React from "react";
import { Form } from "react-bootstrap";

export default props => {
  const { input, name, placeholder, type } = props;
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control placeholder={placeholder} {...input} required type={type} />
    </Form.Group>
  );
};
