import "./blog.css";
import axios from "axios";
import BlogHeader from "../../components/blogheader/BlogHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <BlogHeader />
      <Container>
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  );
};

export default Blog;
