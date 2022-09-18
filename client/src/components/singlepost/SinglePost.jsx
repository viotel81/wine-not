import "./singlepost.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5001/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      {post.image && (
        <img className="singlePostImg" src={PF + post.image} alt="" />
      )}
      {updateMode ? (
        <input
          className="editTitle"
          type="text"
          value={title}
          autofocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <>
          <h1 className="singlePostTitle">{title}</h1>
          <div className="singlePostInfo">
            <span className="singlePostDate">
              Posted: <b>{new Date(post.createdAt).toDateString()}</b>
            </span>
            {post.username === user?.username && (
              <div className="singlePostIcons">
                <i
                  className="editIcon fa-solid fa-pen-to-square fa-2x"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="trashIcon fa-solid fa-trash fa-2x"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </div>
        </>
      )}
      {updateMode ? (
        <textarea
          className="editText"
          type="text"
          value={description}
          autoFocus
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <p className="singlePostText">{description}</p>
      )}
      {updateMode ? (
        <button className="saveChangesButton" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <div className="singlePostBack">
          <Link className="link" to={"/"}>
            <i className="backIcon fa-solid fa-arrow-left"></i>
            <span>Back to Blog</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
