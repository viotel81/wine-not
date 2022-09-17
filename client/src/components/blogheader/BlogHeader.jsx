import "./blogheader.css";

const BlogHeader = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Sommelier's Blog</span>
        <span className="headerTitleSm">The revelations of family secrets</span>
      </div>
      <img className="headerImg" src="/images/vineyard.jpg" alt="vineyard" />
    </div>
  );
};

export default BlogHeader;
