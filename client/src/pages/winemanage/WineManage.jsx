import "./winemanage.css";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

function Manage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWine = {
      username: user.username,
      title,
      description,
      price,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newWine.photo = filename;
      try {
        await axios.post("/uploads", data);
      } catch (err) {}
    }
    try {
      await axios.post("/wines", newWine);
      window.location.replace("/catalogue");
    } catch (err) {}
  };

  return (
    <Container>
      <div className="manage">
        {file && (
          <img
            className="manageImg "
            src={URL.createObjectURL(file)}
            alt=""
          ></img>
        )}

        <Form className="manageForm" onSubmit={handleSubmit}>
          <div className="manageFormGroup">
            <label htmlFor="manageFileInput">
              <i className="manageIcon fas fa-plus"></i>
            </label>
            <span className="labelDesc">Add Photo</span>
            <input
              type="file"
              id="manageFileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="manageInput"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="manageFormGroup">
            <textarea
              cols="30"
              rows="10"
              placeholder="Description of the wine..."
              type="text"
              className="manageInput manageDescription"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="manageFormGroup">
            <input
              type="text"
              placeholder="Price"
              className="managePrice manageInput"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="manageFooter">
            <button className="manageSubmit" type="submit">
              Upload
            </button>
            <div className="catalogueBack">
              <Link className="link" to={"/catalogue"}>
                <i className="backIcon fa-solid fa-arrow-left"></i>
                <span>Back to Catalogue</span>
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Manage;
