import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5001/images/";

  return (
    <div className="post">
      {post.image && <img className="postImg" src={PF + post.image} alt="" />}
      <div className="postContent">
        <h3 className="postTitle">{post.title}</h3>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="postText">{post.description}</p>
        <Link to={`/post/${post._id}`}>
          <button className="postReadMore">Read More...</button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
