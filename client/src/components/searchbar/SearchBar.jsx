import "./searchbar.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchValue) ||
        post.description.toLowerCase().includes(searchValue)
    );
    setSearchResults(resultsArray);
  };

  return (
    <Container className="searchContainer">
      <Form className="search" onSubmit={handleSubmit}>
        <div className="input-group rounded">
          <input
            type="search"
            id="search"
            className="form-control"
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default SearchBar;
