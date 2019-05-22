import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default props => {
  const { input, ...inputProps } = props;
  return (
    <Form.Group>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control
        placeholder={props.placeholder}
        {...inputProps}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        required
      />
    </Form.Group>
  );
};
