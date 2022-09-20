import "./registration.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Registration = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Register for one of our wine tasting events</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sed
        obcaecati. Eum pariatur inventore delectus aperiam rem nulla sed iure.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        quam?
      </p>
      <Button variant="primary" onClick={handleShow}>
        Sign Up Now
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Please fill out the fields to book your spot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="form-group mb-3" controlId="formBasicName">
              <input type="text" placeholder="Your name" required />
            </Form.Group>
            <Form.Group className="form-group mb-3" controlId="formBasicEmail">
              <input type="email" placeholder="Your email" required />
            </Form.Group>
            <Form.Group className="form-group mb-3" controlId="formBasicMessage">
              <textarea type="text" placeholder="Message" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Registration;
