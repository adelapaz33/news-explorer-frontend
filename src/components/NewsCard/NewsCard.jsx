import "./NewsCard.css";
import saveIcon from "../../assets/bookmark.svg";
function NewsCard({ article }) {
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
        <button className="card__save-button">
          <img src={saveIcon} alt="" className="card__save-icon" />
        </button>
      </div>
      <section className="card__body">
        <h2 className="card__date">{formattedDate}</h2>
        <h3 className="card__name">{article.title}</h3>
        <p className="card__text">{article.description}</p>
        <div className="card__spacer" />
        <p className="card__source">{article.source.name}</p>
      </section>
    </li>
  );
}

export default NewsCard;

// Displays a single article
// Props: title, image, description, maybe source, publishedAt, url
// Handles layout and styling for one card
