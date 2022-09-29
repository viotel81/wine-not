import "./pagination.css";

const PaginationSearch = ({ searchResultsPerPage, searchResults, paginate }) => {
  const pageNumbersSearch = [];

  for (let i = 1; i <= Math.ceil(searchResults / searchResultsPerPage); i++) {
    pageNumbersSearch.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbersSearch.map((number) => (
        <button
          className="paginationButton"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationSearch;
