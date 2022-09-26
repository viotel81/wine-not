import "./settings.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      setFailure(true);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <Container>
      <div className="settings">
        <h3 className="settingsUpdateTitle">Update Your Account</h3>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="settingsFooter">
            <button
              className="settingsSubmit"
              type="submit"
              onClick={handleShow}
            >
              Update
            </button>
            <div className="settingsBack">
              <Link className="link" to={"/blog"}>
                <i className="backIcon fa-solid fa-arrow-left"></i>
                <span>Back to Blog</span>
              </Link>
            </div>
          </div>
          {success ? (
            <Modal
              className="modalSuccess"
              show={show}
              onHide={handleClose}
              animation={false}
            >
              <Modal.Body>Changes saved successfully!</Modal.Body>
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
              <Modal.Body>
                Please check the values provided and try again!
              </Modal.Body>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal>
          )}
        </form>
      </div>
    </Container>
  );
}
