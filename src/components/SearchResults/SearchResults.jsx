import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({ articles, visibleCount, setVisibleCount }) {
  return (
    <div className="results">
      <h3 className="results__header">Search Results</h3>
      <NewsCardList articles={articles.slice(0, visibleCount)} />
      {articles.length > visibleCount && (
        <button
          className="results__show-more-btn"
          onClick={() => setVisibleCount((prev) => prev + 3)}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default SearchResults;
