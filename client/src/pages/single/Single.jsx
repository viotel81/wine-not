import SinglePost from "../../components/singlepost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import BlogHeader from "../../components/blogheader/BlogHeader";
import { Container } from "react-bootstrap";
import "./single.css";

const Single = () => {
  return (
    <>
      <BlogHeader />
      <Container>
        <div className="single">
          <SinglePost />
          <Sidebar />
        </div>
      </Container>
    </>
  );
};

export default Single;
