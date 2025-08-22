import "./SavedArticlesPage.css";
import { useSavedArticles } from "../../Context/SavedArticlesContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedArticlesPage({ currentUser, isLoggedIn }) {
  const { savedArticles } = useSavedArticles();
  return (
    <div className="saved">
      <h3 className="saved__description">Saved articles</h3>

      <h2 className="saved__header">
        {currentUser?.name || "User"}, you have {savedArticles.length} saved{" "}
        {savedArticles.length === 1 ? "article" : "articles"}
      </h2>
      <p className="saved__data">
        By keywords:{" "}
        {savedArticles
          .map((a) => a.searchTerm)
          .filter(Boolean)
          .join(", ")}
      </p>
      {savedArticles.length === 0 ? (
        <p>No saved articles yet</p>
      ) : (
        <ul className="saved__list">
          {" "}
          {savedArticles.map((article) => (
            <NewsCard
              article={article}
              key={article.url}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedArticlesPage;
