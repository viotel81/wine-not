import "./settings.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

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
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span className="profileUpdated">Profile is updated!</span>
          )}
        </form>
      </div>
    </Container>
  );
}
