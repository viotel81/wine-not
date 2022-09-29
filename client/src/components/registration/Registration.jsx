import "./registration.css";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Registration = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [confirmationShow, setConfirmationShow] = useState(false);
  const handleConfirmationClose = () => setConfirmationShow(false);
  const handleConfirmationShow = () => setConfirmationShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRegistration = {
      name,
      email,
      message,
    };
    try {
      await axios.post("/registrations", newRegistration);
      setSuccess(true);
      handleConfirmationShow();
    } catch (err) {}
  };

  return (
    <>
      <div>
        <h1 className="mb-4">Register for one of our wine tasting events</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sed obcaecati. Eum pariatur inventore delectus aperiam rem nulla sed
          iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis, quam?
        </p>
        <Button variant="primary" onClick={handleShow}>
          Sign Up Now
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Please fill out the fields below to book your spot
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="" onSubmit={handleSubmit}>
              <Form.Group className="form-group mb-3" controlId="formBasicName">
                <input
                  type="text"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group
                className="form-group mb-3"
                controlId="formBasicEmail"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group
                className="form-group mb-3"
                controlId="formBasicMessage"
              >
                <textarea
                  type="text"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  autoFocus
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Send
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {success && (
        <Modal
          className="modalSuccess"
          show={confirmationShow}
          onHide={handleConfirmationClose}
          animation={false}
        >
          <Modal.Body>
            Your message has been received and we will get back to you shortly!
          </Modal.Body>
          <Button variant="secondary" onClick={handleConfirmationClose}>
            Ok
          </Button>
        </Modal>
      )}
    </>
  );
};

export default Registration;
