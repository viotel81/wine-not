import "./publish.css";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/uploads", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <Container>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form action="" className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup Add">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <span className="labelDesc">Add Picture</span>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            hidden
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput writeTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tell Your story"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFooter">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
          <div className="writeBack">
            <Link className="link" to={"/blog"}>
              <i className="backIcon fa-solid fa-arrow-left"></i>
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Write;
