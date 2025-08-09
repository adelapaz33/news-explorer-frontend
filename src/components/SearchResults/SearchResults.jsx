import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
function SearchResults() {
  return (
    <div className="results">
      <h3 className="results__header">Search Results</h3>
      <NewsCardList />
      <button className="results__show-more-btn">Show More</button>
    </div>
  );
}

export default SearchResults;
