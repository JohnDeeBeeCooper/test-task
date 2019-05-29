import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

const DeleteModal = props => {
  const { show, onHide, func, deleteId } = props;
  const onDelete = id => {
    func(id);
    onHide();
  };
  return (
    <Modal size="sm" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="danger" onClick={() => onDelete(deleteId)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
const mapStateToProps = ({ data }) => {
  const { deleteId } = data;
  return { deleteId };
};
export default connect(mapStateToProps)(DeleteModal);
