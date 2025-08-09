import alisonPhoto from "../../assets/SideViewPhoto.jpg";
import "./NewsCard.css";
import saveIcon from "../../assets/bookmark.svg";
function NewsCard() {
  return (
    <li className="card">
      <div className="card__image-container">
        <img src={alisonPhoto} alt="" className="card__image" />
        <button className="card__save-button">
          <img src={saveIcon} alt="" className="card__save-icon" />
        </button>
      </div>
      <section className="card__body">
        <h2 className="card__date">Date of Article</h2>
        <h3 className="card__name">Article Name</h3>
        <p className="card__text">Beginning text of article here...</p>
        <div className="card__spacer" />
        <p className="card__source">WebsiteName</p>
      </section>
    </li>
  );
}

export default NewsCard;

// Displays a single article
// Props: title, image, description, maybe source, publishedAt, url
// Handles layout and styling for one card
