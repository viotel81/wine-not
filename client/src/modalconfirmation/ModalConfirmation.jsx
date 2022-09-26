import "./modalconfirmation.css";
import { Modal, Button } from "react-bootstrap";

const ModalConfirmation = ({
  showModal,
  hideModal,
  confirmModal,
  message,
}) => {
  return (
    <Modal className="confirmModal" show={showModal} onHide={hideModal}>
      <Modal.Body>
        <div className="alert">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => confirmModal()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmation;
