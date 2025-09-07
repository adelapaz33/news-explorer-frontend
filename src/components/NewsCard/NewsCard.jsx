import "./NewsCard.css";
import saveIcon from "../../assets/bookmark.svg";
import saveIconActive from "../../assets/bookmark-saved.svg";
import trashCan from "../../assets/trashcan.svg";
import { useSavedArticles } from "../../Context/SavedArticlesContext";
import { useHeaderStyle } from "../../Context/HeaderStyleContext";

function NewsCard({ article, currentSearchTerm, isLoggedIn }) {
  const { savedArticles, toggleSaveArticle } = useSavedArticles();

  const handleSaveArticle = () => {
    const articleWithTerm = { ...article, searchTerm: currentSearchTerm };
    toggleSaveArticle(articleWithTerm);
  };

  const handleDeleteArticle = () => {
    toggleSaveArticle(article);
  };

  const { isHomePage } = useHeaderStyle();

  const isSaved = savedArticles.some((a) => a.url === article.url);

  const apiDateString = article.publishedAt;
  const dateObject = new Date(apiDateString);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className="card">
      <div className="card__image-container">
        <img src={article.urlToImage} alt="" className="card__image" />
        {isHomePage ? (
          <div className="card__save-wrapper">
            <button onClick={handleSaveArticle} className="card__save-button">
              <img
                src={isLoggedIn && isSaved ? saveIconActive : saveIcon}
                alt="Save Flag"
                className={`card__save-icon ${
                  isSaved ? "card__save-icon--active" : ""
                }`}
              />
            </button>
            {!isLoggedIn && (
              <span className="card__save-text">Sign in to save articles</span>
            )}
          </div>
        ) : (
          <div className="card__delete-wrapper">
            <button
              title=""
              className="card__delete-button"
              onClick={handleDeleteArticle}
            >
              <img
                src={trashCan}
                alt="Trash Can Button"
                className="card__delete-icon"
              />
            </button>
            <span className="card__delete-text">Remove from Saved</span>
          </div>
        )}
        {!isHomePage && (
          <span className="card__keyword">{currentSearchTerm}</span>
        )}
      </div>
      <div className="card__body">
        <h4 className="card__date">{formattedDate}</h4>
        <h4 className="card__title">{article.title}</h4>
        <p className="card__text">{article.description}</p>
        <div className="card__spacer" />
        <p className="card__source">{article.source.name}</p>
      </div>
    </li>
  );
}
export default NewsCard;
