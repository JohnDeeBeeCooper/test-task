import React from "react";
import { Form } from "react-bootstrap";

export default props => {
  const { input, name, placeholder, type, value } = props;
  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        {...input}
        required
        type={type}
        value={value || ''}
      />
    </Form.Group>
  );
};
