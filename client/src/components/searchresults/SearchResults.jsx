import "./searchresults.css";
import Post from "../../components/post/Post";

const SearchResults = ({ searchResults }) => {
  const results = searchResults.map((post) => (
    <Post key={post._id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p className="noPosts">No Matching Posts</p>
    </article>
  );

  return <main className="searchResults">{content}</main>;
};

export default SearchResults;
