import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({
  articles,
  visibleCount,
  setVisibleCount,
  currentSearchTerm,
  isLoggedIn,
}) {
  return (
    <div className="results">
      <h2 className="results__header">Search Results</h2>
      <NewsCardList
        currentSearchTerm={currentSearchTerm}
        articles={articles.slice(0, visibleCount)}
        isLoggedIn={isLoggedIn}
      />
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
