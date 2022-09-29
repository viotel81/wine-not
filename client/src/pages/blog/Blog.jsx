import "./blog.css";
import axios from "axios";
import BlogHeader from "../../components/blogheader/BlogHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import Pagination from "../../components/pagination/Pagination";
import PaginationSearch from "../../components/pagination/PaginationSearch";
import SearchResults from "../../components/searchresults/SearchResults";
import SearchBar from "../../components/searchbar/SearchBar";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [searchResultsPerPage] = useState(3);

  useEffect(() => {
    setSearchResults("");
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
      setSearchResults(res.data);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfLastSearchResult = currentPage * searchResultsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const indexOfFirstSearchResult =
    indexOfLastSearchResult - searchResultsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentSearchResults = searchResults.slice(
    indexOfFirstSearchResult,
    indexOfLastSearchResult
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <BlogHeader />
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <Container className="postsContainer">
        {searchResults ? (
          <SearchResults searchResults={currentSearchResults} />
        ) : (
          <Posts posts={currentPosts} />
        )}
        <Sidebar />
      </Container>
      {searchResults ? (
        <PaginationSearch
          searchResultsPerPage={searchResultsPerPage}
          searchResults={searchResults.length}
          paginate={paginate}
        />
      ) : (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default Blog;
