import "./SavedArticlesPage.css";
import { useSavedArticles } from "../../Context/SavedArticlesContext";
import NewsCard from "../NewsCard/NewsCard";

function SavedArticlesPage({ currentUser, isLoggedIn, currentSearchTerm }) {
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
        {(() => {
          const keywords = savedArticles
            .map((a) => a.searchTerm)
            .filter(Boolean);

          const uniqueKeywords = [...new Set(keywords)];
          const visibleKeywords = uniqueKeywords.slice(0, 2);
          const remainingCount = uniqueKeywords.length - visibleKeywords.length;

          return (
            <>
              {visibleKeywords.join(", ")}
              {remainingCount > 0 && ` and ${remainingCount} more`}
            </>
          );
        })()}
      </p>
      {savedArticles.length === 0 ? (
        <p className="saved__empty">No saved articles yet</p>
      ) : (
        <div className="saved__list-wrapper">
          <ul className="saved__list">
            {" "}
            {savedArticles.map((article) => (
              <NewsCard
                article={article}
                key={article.url}
                isLoggedIn={isLoggedIn}
                currentSearchTerm={currentSearchTerm}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SavedArticlesPage;
