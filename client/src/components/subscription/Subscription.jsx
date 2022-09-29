import axios from "axios";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./subscription.css";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubscription = {
      email,
    };
    try {
      await axios.post("/subscriptions", newSubscription);
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setFailure(true);
      setEmail("");
    }
  };

  return (
    <div className="subscription p-4">
      <h5 className="menuTitle mb-3 mb-md-0">Sign up for our newsletter</h5>
      <Form action="" onSubmit={handleSubmit} className="subscriptionForm">
        <input
          type="email"
          value={email}
          className="form-control"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
        />
        <Button type="submit" onClick={handleShow}>
          Subscribe
        </Button>
        {success ? (
          <Modal
            className="modalSuccess"
            show={show}
            onHide={handleClose}
            animation={false}
          >
            <Modal.Body>You have been successfully subscribed!</Modal.Body>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal>
        ) : (
          failure
        )}
        {failure && (
          <Modal
            className="modalFailure"
            show={show}
            onHide={handleClose}
            animation={false}
          >
            <Modal.Body>You are already subscribed!</Modal.Body>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal>
        )}
      </Form>
    </div>
  );
};

export default Subscription;
